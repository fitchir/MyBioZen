<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class RGPDController extends AbstractController
{
    #[Route('/rgpd', name: 'app_rgpd')]
    public function index(): Response
    {
        return $this->render('rgpd/index.html.twig', [
            'controller_name' => 'RGPDController',
        ]);
    }
}
