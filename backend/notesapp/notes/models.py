# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Note(models.Model):
    text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
