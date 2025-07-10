<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    // Add this block inside the class
    protected $fillable = [
        'title',          // The project title
        'description',    // Description of the project
        'image_url',      // Optional: thumbnail or screenshot
        'github_link',    // Optional: link to GitHub repo
        'live_link',      // Optional: live project/demo link
    ];
}
