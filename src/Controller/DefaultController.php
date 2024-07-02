<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SectionRepository;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }

    #[Route('/sections', name: 'sections')]
    public function sections(SectionRepository $sectionRepository): JsonResponse
    {
        return $this->json([
            'sections' => $sectionRepository->findAll(),
        ]);
    }
}
