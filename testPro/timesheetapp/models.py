import time
from datetime import datetime

from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import models
from django.utils import timezone

class WorkingHour(models.Model):
    id= models.AutoField(primary_key=True)
    date = models.DateField(auto_now_add=True)
    start_time = models.JSONField(db_column='start_time',blank=False,null=False)
    end_time = models.JSONField(db_column='end_time',blank=True,null=True)
    user= models.ForeignKey(User, db_column='User_Id', on_delete=models.CASCADE)

    def __str__(self):
        return self.user + 'day' + self.date
    class Meta:
        managed=True
        db_table= 'WorkingHour'