<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    public function index(): JsonResponse
    {
        $portfolios = Portfolio::orderBy('created_at', 'desc')->get();
        return response()->json($portfolios);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'slug'        => 'required|string|max:255|unique:portfolios,slug|regex:/^[a-z0-9\-]+$/',
            'description' => 'nullable|string',
            'template'    => 'nullable|string|in:minimal,developer,modern,glass',
            'is_active'   => 'nullable|boolean',
        ]);

        $validated['user_id']  = 1;
        $validated['template'] = $validated['template'] ?? 'minimal';

        $portfolio = Portfolio::create($validated);

        return response()->json($portfolio, 201);
    }

    public function show(Portfolio $portfolio): JsonResponse
    {
        return response()->json($portfolio->load(['sections', 'projects', 'skills']));
    }

    public function update(Request $request, Portfolio $portfolio): JsonResponse
    {
        $validated = $request->validate([
            'title'       => 'sometimes|required|string|max:255',
            'slug'        => 'sometimes|required|string|max:255|unique:portfolios,slug,' . $portfolio->id . '|regex:/^[a-z0-9\-]+$/',
            'description' => 'nullable|string',
            'template'    => 'nullable|string|in:minimal,developer,modern,glass',
            'is_active'   => 'nullable|boolean',
        ]);

        $portfolio->update($validated);

        return response()->json($portfolio->fresh());
    }

    public function destroy(Portfolio $portfolio): JsonResponse
    {
        $portfolio->delete();
        return response()->json(['message' => 'Portfolio deleted successfully']);
    }
}
