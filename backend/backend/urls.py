from django.urls import path, include, re_path
from django.views.generic import TemplateView
from drf_spectacular.views import SpectacularJSONAPIView, SpectacularRedocView, SpectacularSwaggerView
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.http import JsonResponse
from django.middleware.csrf import get_token

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('swagger/json/', SpectacularJSONAPIView.as_view(), name='schema'),
    path('swagger/ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('swagger/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path('get-csrf-token/', csrf, name='get-csrf-token'),  # CSRF token endpoint
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += [re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))]

if not settings.DEBUG:
    urlpatterns += [re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT})]
