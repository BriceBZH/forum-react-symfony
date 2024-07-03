<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SectionRepository;
use Symfony\Component\Serializer\SerializerInterface;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }

    #[Route('/sections', name: 'sections')]
    public function sections(SectionRepository $sectionRepository, SerializerInterface $serializer): JsonResponse
    {
        $sections = $sectionRepository->findAll();
        $jsonSections = $serializer->serialize($sections, 'json', ['groups' => 'section:read']);
        $data = [
            'sections' => json_decode($jsonSections, true)
        ];
        return new JsonResponse($data, 200);
    }
}
