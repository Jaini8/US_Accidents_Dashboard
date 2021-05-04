

import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';


var scene, camera, light, controls, mouse, renderer, raycaster;
var timeTracker = performance.now();
var toolTip = document.getElementById("tooltip_three");
var description = document.getElementById("info");
var container = document.getElementById("carShow");
var impactLoc = "everywhere";
var seatLoc = "all";
var comparativeFront = "--";
var comparativeBack = "--";
var comparativeRight = "--";
var comparativeLeft = "--";
var mapping = new Map();

//car highlighting materials
const highlightRightMaterial = new THREE.MeshStandardMaterial({color: 0x37D8E7, transparent: true, opacity: 0});
const highlightLeftMaterial = new THREE.MeshStandardMaterial({color: 0x37D8E7, transparent: true, opacity: 0});
const highlightFrontMaterial = new THREE.MeshStandardMaterial({color: 0x37D8E7, transparent: true, opacity: 0});
const highlightBackMaterial = new THREE.MeshStandardMaterial({color: 0x37D8E7, transparent: true, opacity: 0});

var totalCount = 0;
//first element = front, second element = rear, third element = right, fourth element = left, fifth element = miscellaneous, sixth = unknown
var originalPercents = [0.25, 0, 0, 0, 0, 0];
var updatePercents = [0.3, 0, 0, 0, 0, 0];

var percentageFront = 0;
var percentageBack = 0;
var percentageRight = 0;
var percentageLeft = 0;

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f2f7);

    camera = new THREE.PerspectiveCamera(50, container.clientWidth/container.clientHeight, 0.1, 100);
    camera.position.z = 6;
    camera.position.x = 2;
    camera.position.y = 2;
    scene.add(camera);

    light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    var loader = new GLTFLoader();

    var car = new THREE.Object3D();
    loader.load(modelCar, function (gltf){
            car = gltf.scene;
            car.name = "car";
            scene.add(car);
            var rightHandCar = new THREE.Object3D();
            loader.load(modelCarRight, function (gltf){
                rightHandCar = gltf.scene;
                rightHandCar.name = "right-car"
                rightHandCar.scale.set(1.2, 1.2, 1.05);
                rightHandCar.traverse(function(model){
                        if (model.isMesh){
                            model.material = highlightRightMaterial;
                        }
                    }
                );
                car.add(rightHandCar);
            });

            var leftHandCar = new THREE.Object3D();
            loader.load(modelCarLeft, function (gltf){
                leftHandCar = gltf.scene;
                leftHandCar.name = "left-car"
                leftHandCar.scale.set(1.2, 1.2, 1.05);
                leftHandCar.traverse(function(model){
                        if (model.isMesh){
                            model.material = highlightLeftMaterial;
                        }
                    }
                );
                car.add(leftHandCar);
            });

            var backOfCar = new THREE.Object3D();
            loader.load(modelCarBack, function (gltf){
                backOfCar = gltf.scene;
                backOfCar.name = "back-car"
                backOfCar.scale.set(1.2, 1.2, 1.05);
                backOfCar.traverse(function(model){
                        if (model.isMesh){
                            model.material = highlightBackMaterial;
                        }
                    }
                );
                car.add(backOfCar);
            });

            var frontOfCar = new THREE.Object3D();
            loader.load(modelCarFront, function (gltf){
                frontOfCar = gltf.scene;
                frontOfCar.name = "front-car"
                frontOfCar.scale.set(1.2, 1.2, 1.05);
                frontOfCar.traverse(function(model){
                        if (model.isMesh){
                            model.material = highlightFrontMaterial;
                        }
                    }
                );
                car.add(frontOfCar);
            });
        }
    );

    var material2 = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0});

    var frontBoxGeo = new THREE.BoxGeometry(1.9, 1.5, 1.8);
    var frontBox = new THREE.Mesh(frontBoxGeo, material);
    frontBox.position.y = 0.8;
    frontBox.position.z = 1.8;
    scene.add(frontBox);

    var backBoxGeo = new THREE.BoxGeometry(1.9, 1.5, 2.2);
    var backBox = new THREE.Mesh(backBoxGeo, material);
    backBox.position.y = 0.8;
    backBox.position.z = -2.2;
    scene.add(backBox);

    var leftBoxGeo = new THREE.BoxGeometry(1.5, 1.5, 4.1);
    var leftBox = new THREE.Mesh(leftBoxGeo, material);
    leftBox.position.x = 0.75;
    leftBox.position.y = 0.8;
    scene.add(leftBox);

    var rightBoxGeo = new THREE.BoxGeometry(1.5, 1.5, 4.1);
    var rightBox = new THREE.Mesh(rightBoxGeo, material);
    rightBox.position.x = -0.75;
    rightBox.position.y = 0.8;
    scene.add(rightBox);

    var intersectables = [frontBox, backBox, leftBox, rightBox];

    var rect = container.getBoundingClientRect();
    // description.width = '150 px';

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    var onMouseMove = function (event){
        mouse.x = ((event.clientX - rect.left)/ container.clientWidth) * 2 - 1;
        mouse.y = - ((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

        var intersection = raycaster.intersectObjects(intersectables, true);
        if (intersection.length > 0){
            var checker = intersection[0].object;
            //make tooltip visible
            toolTip.style.display = "block";
            //mouse is based of the origin being at the center of the three.js model and is divided by the container's height and width
            //added in 10 to account for cursur size since mouse position is based on the top of the cursor
            toolTip.style.left = (mouse.x * 0.5 * container.clientWidth) + (0.5 * container.clientWidth) + rect.left + 10 + "px";
            toolTip.style.top = rect.top - (mouse.y * 0.5 * container.clientHeight) + (0.5 * container.clientHeight) + 10 + "px";
            if (checker.id == frontBox.id){
                //make front of car visible
                //change tooltip information to that of the front of the car      
                toolTip.innerHTML = "Front of the car - " + parseFloat(percentageFront).toFixed(2) + "% " + comparativeFront;
                highlightFrontMaterial.opacity = 0.5;
            } else if (checker.id == backBox.id){
                toolTip.innerHTML = "Back of the car - " + parseFloat(percentageBack).toFixed(2) + "% " + comparativeBack;
                highlightBackMaterial.opacity = 0.5;
            } else if (checker.id == rightBox.id){
                highlightRightMaterial.opacity = 0.5;
                toolTip.innerHTML = "Right side of the car - " + parseFloat(percentageRight).toFixed(2) + "% " + comparativeRight;
            } else if (checker.id == leftBox.id){
                toolTip.innerHTML = "Left side of the car - " + parseFloat(percentageLeft).toFixed(2) + "% " + comparativeLeft;
                highlightLeftMaterial.opacity = 0.5;
            }
            
        } else {
            //stop displaying tooltip
            toolTip.style.display = "none";
            //stop displaying highlighted car if all highlight is not true
            highlightRightMaterial.opacity = 0;
            highlightFrontMaterial.opacity = 0;
            highlightBackMaterial.opacity = 0;
            highlightLeftMaterial.opacity = 0;
        }
    }

    var onDoubleClick = function (event){
        mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
		mouse.y = - (event.clientY / container.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);

        var intersected = raycaster.intersectObjects(intersectables);
        if(intersected.length > 0){
            var checker = intersected[0].object;
            if (checker.id == frontBox.id){
                if (impactLoc != "Front"){
                    impactLoc = "Front";
                    toolTip.innerHTML = "Front of the car - " + parseFloat(percentageFront).toFixed(2) + "% " + comparativeFront;
                } else {
                    impactLoc = "everywhere";
                }
            } else if (checker.id == backBox.id){
                if (impactLoc != "Back"){
                    impactLoc = "Back";
                    toolTip.innerHTML = "Back of the car - " + parseFloat(percentageBack).toFixed(2) + "% " + comparativeBack;
                } else {
                    impactLoc = "everywhere";
                }
            } else if (checker.id == rightBox.id){
                if (impactLoc != "Right"){
                    impactLoc = "Right";
                    toolTip.innerHTML = "Right side of the car - " + parseFloat(percentageRight).toFixed(2) + "% " + comparativeRight;
                    console.log(impactLoc);
                } else {
                    impactLoc = "everywhere";
                }
            } else if (checker.id == leftBox.id){
                if (impactLoc != "Left"){
                    impactLoc = "Left";
                    toolTip.innerHTML = "Left side of the car - " + parseFloat(percentageLeft).toFixed(2) + "% " + comparativeLeft;
                } else {
                    impactLoc = "everywhere";
                }
            }

            if (impactLoc != "everywhere"){
                description.innerHTML = "Double Click on the Same Part of the Car to Deselect Impact Location";
            } else {
                description.innerHTML = "Double Click on the Car to Set Impact Location";
            }
        }
    }

    container.addEventListener("mousemove", onMouseMove);

    container.addEventListener("dblclick", onDoubleClick);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    modelLoop();
}

window.onload = init;

function isFront(str){
    if (str == "1 Clock Point" || str == "11 Clock Point"|| str == "12 Clock Point"){
        return true;
    }

    return false;
}

function isBack(str){
    if (str == "5 Clock Point" || str == "6 Clock Point" || str == "7 Clock Point") {
        return true;
    }

    return false;
}

function isRight(str){
    if (str == "2 Clock Point" || str == "3 Clock Point" || str == "4 Clock Point" || str.startsWith("Right")) {
        return true;
    }

    return false;
}

function isLeft(str){
    if (str == "8 Clock Point" || str == "9 Clock Point" || str == "10 Clock Point" || str.startsWith("Left")) {
        return true;
    }

    return false;
}



function car(vehicleData){
        function unpack2(vehicleData, key){
            return vehicleData.map(function(row){ return row[key]; });
        }

        function initialziation(){
            var impactData = unpack2(vehicleData, 'IMPACT1');
            
            console.log(impactData[0]);

            impactData.forEach(function(curr){
                totalCount++;
               // console.log(curr);
                if (isFront(curr)){
                    originalPercents[0]++;
                } else if (isBack(curr)){ // aka 5-7
                    originalPercents[1]++;
                } else if (isRight(curr)){ // aka 2-4
                    originalPercents[2]++;
                } else if (isLeft(curr)){ // aka 8-10
                    originalPercents[3]++;
                } else if (curr == "Unknown" || curr == "Not Reported"){
                    originalPercents[5]++;
                } else if (curr == "Non-Collision") {
                    originalPercents[6]++;
                } else {
                    originalPercents[4]++;
                }
            });

            console.log("There's a total of " + totalCount);
            console.log(originalPercents[0]);
            console.log(originalPercents[1]);
            console.log(originalPercents[2]);
            console.log(originalPercents[3]);

            percentageFront = (originalPercents[0]/totalCount) * 100;
            percentageBack = (originalPercents[1]/totalCount) * 100;
            percentageRight = (originalPercents[2]/totalCount) * 100;
            percentageLeft = (originalPercents[3]/totalCount) * 100;

            originalPercents[0] = percentageFront;
            originalPercents[1] = percentageBack;
            originalPercents[2] = percentageRight;
            originalPercents[3] = percentageLeft;
            originalPercents[4] = (originalPercents[4]/totalCount) * 100;
            originalPercents[5] = (originalPercents[5]/totalCount) * 100;
            originalPercents[6] = (originalPercents[6]/totalCount) * 100;


            console.log("dsfds",percentageFront);
            console.log(percentageBack);
            console.log(originalPercents[2]);
            console.log(originalPercents[3]);

        }

        initialziation();

        function updateData (){
            var updateTotal = 0;

            var impactData = unpack2(vehicleData, "IMPACT1");
            var vehStData = unpack2(vehicleData, "ST_CASE");
            var vehYrData = unpack2(vehicleData, "YR_NO");

            // console.log(impactData)
            
            updatePercents[0] = 0;
            updatePercents[1] = 0;
            updatePercents[2] = 0;
            updatePercents[3] = 0;
            updatePercents[4] = 0;
            updatePercents[5] = 0;

            var validIndices = [];

            function validIndex(ind){
                var id = vehYrData[ind] + "" + vehStData[ind];
                var indImpact = impactData[ind];

                if (impactLoc == "Front" && !(isFront(indImpact))){
                    return false;
                } else if (impactLoc == "Back" && !(isBack(indImpact))){
                    return false;
                } else if (impactLoc == "Right" && !(isRight(indImpact))){
                    return false;
                } else if (impactLoc == "Left" && !(isLeft(indImpact))){
                    return false;
                }

                if (seatLoc != "all"){
                    return false;
                }

                validIndices.push(id);
                return true;
            }

            impactData.forEach(function(curr, ind){
                if (validIndex(ind)){
                    updateTotal++;

                    if (isFront(curr)){
                        updatePercents[0]++;
                    } else if (isBack(curr)){ // aka 5-7
                        updatePercents[1]++;
                    } else if (isRight(curr)){ // aka 2-4
                        updatePercents[2]++;
                    } else if (isLeft(curr)){ // aka 8-10
                        updatePercents[3]++;
                    } else if (curr == "Unknown" || curr == "Not Reported"){
                        updatePercents[5]++;
                    } else if (curr == "Non-Collision"){
                        updatePercents[6]++;
                    } else {
                        updatePercents[4]++;
                    }
                }
            });

            percentageFront = (updatePercents[0] / updateTotal) * 100;
            percentageBack = (updatePercents[1] / updateTotal) * 100;
            percentageRight = (updatePercents[2] / updateTotal) * 100;
            percentageLeft = (updatePercents[3] / updateTotal) * 100;
            updatePercents[4] = (updatePercents[4] / updateTotal) * 100;
            updatePercents[5] = (updatePercents[5] / updateTotal) * 100;
            updatePercents[6] = (updatePercents[6] / updateTotal) * 100;


            if (updatePercents[0] == originalPercents[0]){
                comparativeFront = "--";
            } else if (updatePercents[0] > originalPercents[0]){
                comparativeFront = "\u21E7";
            } else {
                comparativeFront = "\u21E9";
            }

            if (updatePercents[1] == originalPercents[1]){
                comparativeBack = "--";
            } else if (updatePercents[1] > originalPercents[1]){
                comparativeBack = "\u21E7";
            } else {
                comparativeBack = "\u21E9";
            }

            if (updatePercents[2] == originalPercents[2]){
                comparativeRight = "--";
            } else if (updatePercents[2] > originalPercents[2]){
                comparativeRight = "\u21E7";
            } else {
                comparativeRight = "\u21E9";
            }

            if (updatePercents[3] == originalPercents[3]){
                comparativeLeft = "--";
            } else if (updatePercents[3] > originalPercents[3]){
                comparativeLeft = "\u21E7";
            } else {
                comparativeLeft = "\u21E9";
            }
        }

        document.addEventListener("dblclick", updateData);
};

function modelUpdate(){
    var timeChange = (performance.now() - timeTracker)/1000;
}

function render()
{
  renderer.render(scene, camera);
}

function modelLoop(){
    requestAnimationFrame(modelLoop);
    controls.update();
    modelUpdate();
    render();
}


car(JSON.parse(carplotData))
// console.log(carplotData)