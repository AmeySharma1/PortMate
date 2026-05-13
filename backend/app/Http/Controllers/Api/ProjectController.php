<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    public function index(Portfolio $portfolio): JsonResponse
    {
        $projects = $portfolio->projects()->orderBy('order')->get();
        return response()->json($projects);
    }

    public function store(Request $request, Portfolio $portfolio): JsonResponse
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'slug'        => 'nullable|string|max:255|unique:projects,slug',
            'description' => 'nullable|string',
            'content'     => 'nullable|string',
            'image_url'   => 'nullable|url|max:500',
            'github_url'  => 'nullable|url|max:500',
            'live_url'    => 'nullable|url|max:500',
            'order'       => 'nullable|integer|min:0',
            'is_active'   => 'nullable|boolean',
        ]);

        $validated['portfolio_id'] = $portfolio->id;
        $validated['slug']  = $validated['slug'] ?? Str::slug($validated['title']) . '-' . Str::random(4);
        $validated['order'] = $validated['order'] ?? $portfolio->projects()->count();

        $project = Project::create($validated);

        return response()->json($project, 201);
    }

    public function show(Portfolio $portfolio, Project $project): JsonResponse
    {
        abort_if($project->portfolio_id !== $portfolio->id, 404);
        return response()->json($project);
    }

    public function update(Request $request, Portfolio $portfolio, Project $project): JsonResponse
    {
        abort_if($project->portfolio_id !== $portfolio->id, 404);

        $validated = $request->validate([
            'title'       => 'sometimes|required|string|max:255',
            'slug'        => 'nullable|string|max:255|unique:projects,slug,' . $project->id,
            'description' => 'nullable|string',
            'content'     => 'nullable|string',
            'image_url'   => 'nullable|url|max:500',
            'github_url'  => 'nullable|url|max:500',
            'live_url'    => 'nullable|url|max:500',
            'order'       => 'nullable|integer|min:0',
            'is_active'   => 'nullable|boolean',
        ]);

        $project->update($validated);

        return response()->json($project->fresh());
    }

    public function destroy(Portfolio $portfolio, Project $project): JsonResponse
    {
        abort_if($project->portfolio_id !== $portfolio->id, 404);
        $project->delete();
        return response()->json(['message' => 'Project deleted successfully']);
    }
}
