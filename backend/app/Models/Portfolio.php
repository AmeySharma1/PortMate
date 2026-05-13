<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Portfolio extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'description',
        'template',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    protected $appends = ['sections_count', 'projects_count', 'skills_count'];

    public function sections(): HasMany
    {
        return $this->hasMany(Section::class);
    }

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }

    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class);
    }

    public function getSectionsCountAttribute(): int
    {
        return $this->sections()->count();
    }

    public function getProjectsCountAttribute(): int
    {
        return $this->projects()->count();
    }

    public function getSkillsCountAttribute(): int
    {
        return $this->skills()->count();
    }
}
