from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def health_check(request):
    """
    Health check endpoint to verify the API is running.
    """
    return Response({"status": "ok", "message": "Morph Interview API is running"})


# =============================================================================
# TODO: INTERVIEW TASK - Step 3: Build the Endpoint
# =============================================================================
