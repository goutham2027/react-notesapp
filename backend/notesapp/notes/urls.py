from django.conf.urls import url
from notes.views import notes_list

urlpatterns = [
    url(r'^notes/$', notes_list)
]
