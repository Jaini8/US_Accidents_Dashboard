from django.db import models

# Create your models here.

class Accidents(models.Model):
    id = models.IntegerField(primary_key=True)
    STATE = models.IntegerField()
    COUNTY = models.IntegerField()
    MONTH = models.IntegerField()
    DAY = models.IntegerField()
    HOUR = models.IntegerField()
    MINUTE = models.IntegerField()
    NHS = models.CharField(max_length=200)
    ROUTE = models.CharField(max_length=200)
    MAN_COLL = models.CharField(max_length=200)
    REL_JUNC = models.CharField(max_length=200)
    REL_ROAD = models.CharField(max_length=200)
    TRAF_FLO = models.CharField(max_length=200)
    NO_LANES = models.CharField(max_length=100)
    SP_LIMIT = models.CharField(max_length=50)
    ALIGNMNT = models.CharField(max_length=100)
    PAVE_TYP = models.CharField(max_length=200)
    SUR_COND = models.CharField(max_length=250)
    LGT_COND = models.CharField(max_length=100)
    WEATHER = models.CharField(max_length=100)
    NOT_HOUR = models.IntegerField()
    NOT_MIN = models.IntegerField()
    ARR_HOUR = models.IntegerField()
    ARR_MIN = models.IntegerField()
    HOSP_HR = models.IntegerField()
    HOSP_MN = models.IntegerField()
    SCH_BUS = models.CharField(max_length=20)
    FATALS = models.IntegerField()
    DAY_WEEK = models.CharField(max_length=20)
    ST_CASE = models.IntegerField()
    CITY = models.IntegerField()
    YEAR = models.IntegerField()
    TWAY_ID = models.CharField(max_length=100)
    LATITUDE = models.DecimalField(max_digits= 20, decimal_places= 10, null= True)
    LONGITUD = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    YR_NO = models.IntegerField()
    STATENAME = models.CharField(max_length=50)
    # DATE_ACC = models.DateField(blank=True, null=True) 
    # MONTH_DATE = models.CharField(max_length=20, blank=True, null=True)


class Vehicles(models.Model):
    id = models.IntegerField(primary_key=True)
    VEH_NO = models.IntegerField(null=True)
    NUMOCCS = models.IntegerField(null=True)
    MAKE = models.CharField(max_length=300, null=True)
    OWNER = models.CharField(max_length=200, null=True)
    ROLLOVER = models.CharField(max_length=150, null=True)
    J_KNIFE = models.CharField(max_length=150, null=True)
    TOW_VEH = models.CharField(max_length=200, null=True)
    IMPACT1 = models.CharField(max_length=200, null=True)
    UNDERIDE = models.CharField(max_length=150, null=True)
    DEFORMED = models.CharField(max_length=200, null=True)
    FIRE_EXP = models.CharField(max_length=100, null=True)
    DEATHS = models.IntegerField(null=True)
    ST_CASE = models.IntegerField(null=True)
    MOD_YEAR = models.IntegerField(null=True)
    DR_DRINK = models.CharField(max_length=100, null=True)
    L_STATUS = models.CharField(max_length=100, null=True)
    L_ENDORS = models.CharField(max_length=200, null=True)
    L_COMPL = models.CharField(max_length=200, null=True)
    L_RESTRI = models.CharField(max_length=200, null=True)
    PREV_ACC = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    PREV_SPD = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    LAST_MO = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    FIRST_MO = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    DR_WGT = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    DR_HGT = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    LAST_YR = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    FIRST_YR = models.DecimalField(max_digits= 20, decimal_places= 10, null=True)
    HIT_RUN = models.CharField(max_length=100, null=True)
    YR_NO = models.IntegerField(null=True)
    SPEEDREL = models.CharField(max_length=100, null=True)


class Persons(models.Model):
    id = models.IntegerField(primary_key=True)
    VEH_NO = models.IntegerField(null=True)
    PER_NO = models.IntegerField(null=True)
    AGE = models.IntegerField(null=True)
    SEX = models.CharField(max_length=50, null=True)
    PER_TYP = models.CharField(max_length=100, null=True)
    SEAT_POS = models.CharField(max_length=100, null=True)
    AIR_BAG = models.CharField(max_length=50, null=True)
    EJECTION = models.CharField(max_length=100, null=True)
    EJ_PATH = models.CharField(max_length=100, null=True)
    DRINKING = models.CharField(max_length=100, null=True)
    DRUGS = models.CharField(max_length=100, null=True)
    INJ_SEV = models.CharField(max_length=100, null=True)
    DEATH_MO = models.IntegerField(null=True)
    DEATH_DA = models.IntegerField(null=True)
    DEATH_HR = models.IntegerField(null=True)
    DEATH_MN = models.IntegerField(null=True)
    LAG_HRS = models.IntegerField(null=True)
    LAG_MINS = models.IntegerField(null=True)
    RACE = models.CharField(max_length=100, null=True)
    WORK_INJ = models.CharField(max_length=100, null=True)
    ST_CASE = models.IntegerField(null=True)
    DEATH_YR = models.IntegerField(null=True)
    YR_NO = models.IntegerField(null=True)
    DOA = models.CharField(max_length=100, null=True)


class Home1(models.Model):
    id = models.IntegerField(primary_key=True)
    YR_NO = models.IntegerField(null=True)
    FATALS = models.IntegerField(null=True)
    STATENAME = models.CharField(max_length=50)
    STATE = models.IntegerField(null=True)
    SEX = models.CharField(max_length=50, null=True)

    

class Home2(models.Model):
    id = models.IntegerField(primary_key=True)
    YR_NO = models.IntegerField(null=True)
    FATALS = models.IntegerField(null=True)
    STATENAME = models.CharField(max_length=50)
    STATE = models.IntegerField(null=True)
    SEX = models.CharField(max_length=50, null=True)
    COUNTY = models.IntegerField(null=True)


class Home3(models.Model):
    id = models.IntegerField(primary_key=True)
    YR_NO = models.IntegerField(null=True)
    FATALS = models.IntegerField(null=True)
    STATENAME = models.CharField(max_length=50)
    STATE = models.IntegerField(null=True)
    SEX = models.CharField(max_length=50, null=True)
    AGE = models.IntegerField(null=True)


class Home4(models.Model):
    id = models.IntegerField(primary_key=True)
    YR_NO = models.IntegerField(null=True)
    FATALS = models.IntegerField(null=True)
    STATENAME = models.CharField(max_length=50)
    STATE = models.IntegerField(null=True)
    SEX = models.CharField(max_length=50, null=True)
    DAY_WEEK = models.CharField(max_length=20)


class Home5(models.Model):
    id = models.IntegerField(primary_key=True)
    YR_NO = models.IntegerField(null=True)
    FATALS = models.IntegerField(null=True)
    STATENAME = models.CharField(max_length=50)
    STATE = models.IntegerField(null=True)
    SEX = models.CharField(max_length=50, null=True)
    HOUR = models.IntegerField(null=True)


class Factors(models.Model):
    id = models.IntegerField(primary_key=True)
    date_acc = models.DateField(db_column='DATE_ACC')  # Field name made lowercase.
    day_week = models.TextField(db_column='DAY_WEEK', blank=True, null=True)  # Field name made lowercase.
    hour = models.BigIntegerField(db_column='HOUR', blank=True, null=True)  # Field name made lowercase.    
    fatals = models.BigIntegerField(db_column='FATALS', blank=True, null=True)  # Field name made lowercase.
