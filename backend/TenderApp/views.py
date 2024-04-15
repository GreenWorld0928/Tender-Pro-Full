from django.shortcuts import render
from django.http import JsonResponse
from .models import ExeTeamMember

# Create your views here.

def my_api_test(request):
    param1_value = request.GET.get('param1')
    param2_value = request.GET.get('param2')
    data = {
        'message': 'Hello, world!',
        'method': request.method,
        'path': request.path,
        'user_agent': request.headers.get('User-Agent'),
        'param1': param1_value,
        'param2': param2_value
        }
    return JsonResponse(data)

def getExeTeamMembers(request):
    teamData = ExeTeamMember.objects.all().values()
    resData = {
        'teamMembers': list(teamData),
    }
    return JsonResponse(resData)