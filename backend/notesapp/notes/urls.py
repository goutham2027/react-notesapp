from django.conf.urls import url
from notes.views import notes_list, notes_detail

urlpatterns = [
    url(r'^notes/$', notes_list),
    url(r'^notes/(?P<notes_id>\d+)/$', notes_detail)
]
