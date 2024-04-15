from django.db import models

# Create your models here.
class ExeTeamMember(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  role = models.CharField(max_length=255)
  description = models.CharField(max_length=3000)

  def __str__(self):
    return f"{self.firstname} {self.lastname}"