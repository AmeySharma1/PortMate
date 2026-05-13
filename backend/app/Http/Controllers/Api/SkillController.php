<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SkillController extends Controller
{
    public function index(Portfolio $portfolio): JsonResponse
    {
        $skills = $portfolio->skills()->orderBy('order')->get();
        return response()->json($skills);
    }

    public function store(Request $request, Portfolio $portfolio): JsonResponse
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'category'    => 'nullable|string|in:programming,design,tools,frameworks,databases,other',
            'level'       => 'nullable|integer|min:0|max:100',
            'description' => 'nullable|string',
            'order'       => 'nullable|integer|min:0',
            'is_active'   => 'nullable|boolean',
        ]);

        $validated['portfolio_id'] = $portfolio->id;
        $validated['level'] = $validated['level'] ?? 50;
        $validated['order'] = $validated['order'] ?? $portfolio->skills()->count();

        $skill = Skill::create($validated);

        return response()->json($skill, 201);
    }

    public function show(Portfolio $portfolio, Skill $skill): JsonResponse
    {
        abort_if($skill->portfolio_id !== $portfolio->id, 404);
        return response()->json($skill);
    }

    public function update(Request $request, Portfolio $portfolio, Skill $skill): JsonResponse
    {
        abort_if($skill->portfolio_id !== $portfolio->id, 404);

        $validated = $request->validate([
            'name'        => 'sometimes|required|string|max:255',
            'category'    => 'nullable|string|in:programming,design,tools,frameworks,databases,other',
            'level'       => 'nullable|integer|min:0|max:100',
            'description' => 'nullable|string',
            'order'       => 'nullable|integer|min:0',
            'is_active'   => 'nullable|boolean',
        ]);

        $skill->update($validated);

        return response()->json($skill->fresh());
    }

    public function destroy(Portfolio $portfolio, Skill $skill): JsonResponse
    {
        abort_if($skill->portfolio_id !== $portfolio->id, 404);
        $skill->delete();
        return response()->json(['message' => 'Skill deleted successfully']);
    }
}
