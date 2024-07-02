<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UserRepository;

class UserController extends AbstractController
{
    #[Route('/membersList', name: 'membersList')]
    public function membersList(UserRepository $userRepository): JsonResponse
    {
        return $this->json([
            'users' => $userRepository->findAll(),
        ]);
    }

    #[Route('/usersList', name: 'usersList')]
    public function usersList(): Response
    {
        return $this->render('user/members-list.html.twig');
    }
}