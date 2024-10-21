<?php

namespace App\Policies;


use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Notifications\DatabaseNotification;

class NotificationPolicy
{
    
    public function update(User $user, DatabaseNotification $databaseNotification): bool
    {
        // dd('called');
        return $user->id == $databaseNotification->notifiable_id;
    }

    
}
