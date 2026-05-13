<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SectionController extends Controller
{
    public function index(Portfolio $portfolio): JsonResponse
    {
        $sections = $portfolio->sections()->orderBy('order')->get();
        return response()->json($sections);
    }

    public function store(Request $request, Portfolio $portfolio): JsonResponse
    {
        $validated = $request->validate([
            'section_type' => 'required|string|in:about,skills,projects,contact,experience,education,custom',
            'title'        => 'nullable|string|max:255',
            'content'      => 'nullable|string',
            'order'        => 'nullable|integer|min:0',
            'is_active'    => 'nullable|boolean',
        ]);

        $validated['portfolio_id'] = $portfolio->id;
        $validated['order'] = $validated['order'] ?? $portfolio->sections()->count();

        $section = Section::create($validated);

        return response()->json($section, 201);
    }

    public function show(Portfolio $portfolio, Section $section): JsonResponse
    {
        abort_if($section->portfolio_id !== $portfolio->id, 404);
        return response()->json($section);
    }

    public function update(Request $request, Portfolio $portfolio, Section $section): JsonResponse
    {
        abort_if($section->portfolio_id !== $portfolio->id, 404);

        $validated = $request->validate([
            'section_type' => 'sometimes|required|string|in:about,skills,projects,contact,experience,education,custom',
            'title'        => 'nullable|string|max:255',
            'content'      => 'nullable|string',
            'order'        => 'nullable|integer|min:0',
            'is_active'    => 'nullable|boolean',
        ]);

        $section->update($validated);

        return response()->json($section->fresh());
    }

    public function destroy(Portfolio $portfolio, Section $section): JsonResponse
    {
        abort_if($section->portfolio_id !== $portfolio->id, 404);
        $section->delete();
        return response()->json(['message' => 'Section deleted successfully']);
    }
}
