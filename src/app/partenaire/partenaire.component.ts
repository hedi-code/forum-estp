import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.scss'
})
export class PartenaireComponent {
  entreprise: any = [
    {
      "nom": "Bouygues",
      "Pack": "Plus",
      "Surface": 150,
      "site": "https://www.bouygues.com",
      "img": "assets/partenaire-entreprises/LogoSite/Bouygues.jpg"
    },
    {
      "nom": "Vinci",
      "Pack": "Plus",
      "Surface": 144,
      "site": "https://www.vinci.com",
      "img": "assets/partenaire-entreprises/LogoSite/Vinci.png"
    },
    {
      "nom": "Fayat",
      "Pack": "Plus",
      "Surface": 110,
      "site": "https://fayat.com",
      "img": "assets/partenaire-entreprises/LogoSite/Fayat.jpg"
    },
    {
      "nom": "NGE",
      "Pack": "Plus",
      "Surface": 80,
      "site": "https://www.nge.fr",
      "img": "assets/partenaire-entreprises/LogoSite/NGE.png"
    },
    {
      "nom": "Eiffage ",
      "Pack": "Plus",
      "Surface": 60,
      "site": "https://www.eiffage.com",
      "img": "assets/partenaire-entreprises/LogoSite/Eiffage .png"
    },
    {
      "nom": "Léon grosse ",
      "Pack": "Plus",
      "Surface": 52,
      "site": "https://www.leongrosse.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Léon grosse .png"
    },
    {
      "nom": "DEMATHIEU BARD",
      "Pack": "Plus",
      "Surface": 46,
      "site": "https://www.demathieu-bard.fr",
      "img": "assets/partenaire-entreprises/LogoSite/DEMATHIEU BARD.png",
    },
    {
      "nom": "Groupe BIR",
      "Pack": "Plus",
      "Surface": 40,
      "site": "https://www.groupebir.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe BIR.png"
    },
    {
      "nom": "Spie Batignolles",
      "Pack": "Plus",
      "Surface": 36,
      "site": "https://www.spiebatignolles.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Spie Batignolles.png"
    },
    {
      "nom": "Paris Ouest Construction",
      "Pack": "Plus",
      "Surface": 32,
      "site": "https://www.paris-ouest.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Paris Ouest Construction.jpg"
    },
    {
      "nom": "Fédération des Sociétés d'Expertise ",
      "Pack": "Plus",
      "Surface": 28,
      "site": "https://www.f-s-e.org",
      "img": "assets/partenaire-entreprises/LogoSite/Fédération des Sociétés d_Expertise .jpg"
    },
    {
      "nom": "GCC",
      "Pack": "Plus",
      "Surface": 28,
      "site": "https://www.gcc-groupe.com",
      "img": "assets/partenaire-entreprises/LogoSite/GCC.png"
    },
    {
      "nom": "Groupe Legendre",
      "Pack": "Plus",
      "Surface": 24,
      "site": "https://www.groupe-legendre.com",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe Legendre.png"
    },
    {
      "nom": "Groupe Pigeon",
      "Pack": "Plus",
      "Surface": 24,
      "site": "https://www.groupe-pigeon.com",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe Pigeon.png"
    },
    {
      "nom": "KAUFMAN & BROAD",
      "Pack": "Plus",
      "Surface": 21,
      "site": "https://corporate.kaufmanbroad.fr/groupe-kaufman-broad/",
      "img": "assets/partenaire-entreprises/LogoSite/KAUFMAN & BROAD.png"
    },
    {
      "nom": "Etandex",
      "Pack": "Plus",
      "Surface": 21,
      "site": "https://www.etandex.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Etandex.jpg"
    },
    {
      "nom": "Syntec Ingénierie",
      "Pack": "Plus",
      "Surface": 21,
      "site": "https://www.syntec-ingenierie.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Syntec Ingénierie.png"
    },
    {
      "nom": "ARTELIA HOLDING",
      "Pack": "Plus",
      "Surface": 18,
      "site": "https://www.arteliagroup.com/fr/",
      "img": "assets/partenaire-entreprises/LogoSite/ARTELIA HOLDING.png"
    },
    {
      "nom": "Genere",
      "Pack": "Plus",
      "Surface": 18,
      "site": "https://www.genere.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Genere.png"
    },
    {
      "nom": "BEG Ingénierie",
      "Pack": "Plus",
      "Surface": 18,
      "site": "https://www.beg-ing.com",
      "img": "assets/partenaire-entreprises/LogoSite/BEG Ingénierie.jpg"
    },
    {
      "nom": "Schindler",
      "Pack": "Plus",
      "Surface": 18,
      "site": "https://www.schindler.fr/fr.html",
      "img": "assets/partenaire-entreprises/LogoSite/Schindler.jpg"
    },
    {
      "nom": "Ateliers de France",
      "Pack": "Plus",
      "Surface": 18,
      "site": "https://ateliersdefrance.com",
      "img": "assets/partenaire-entreprises/LogoSite/Ateliers de France.jpg"
    },
    {
      "nom": "Setec AS",
      "Pack": "Plus",
      "Surface": 18,
      "site": "https://www.setec.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Setec.png"
    },
    {
      "nom": "JLL Tétris",
      "Pack": "Plus",
      "Surface": 18,
      "site": "https://www.jll.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/JLL Tétris.jpg"
    },
    {
      "nom": "Costantini",
      "Pack": "Plus",
      "Surface": 18,
      "site": "www.https://costantini.eu/",
      "img": "assets/partenaire-entreprises/LogoSite/Costantini.png"
    },
    {
      "nom": "INGEROP",
      "Pack": "Plus",
      "Surface": 18,
      "site": "https://www.ingerop.fr",
      "img": "assets/partenaire-entreprises/LogoSite/INGEROP.jpg"
    },
    {
      "nom": "Egis",
      "Pack": "Plus",
      "Surface": 15,
      "site": "https://www.egis-group.com/fr",
      "img": "assets/partenaire-entreprises/LogoSite/Egis.jpg"
    },
    {
      "nom": "Altarea",
      "Pack": "Plus",
      "Surface": 15,
      "site": "https://www.altarea.com",
      "img": "assets/partenaire-entreprises/LogoSite/Altarea.png"
    },
    {
      "nom": "Immobilière 3F",
      "Pack": "Plus",
      "Surface": 15,
      "site": "https://www.groupe3f.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Immobilière 3F.png"
    },
    {
      "nom": "Fayolle",
      "Pack": "Plus",
      "Surface": 15,
      "site": "https://fayolle.eu",
      "img": "assets/partenaire-entreprises/LogoSite/Fayolle.png"
    },
    {
      "nom": "Covivio",
      "Pack": "Plus",
      "Surface": 15,
      "site": "https://www.covivio.eu/fr/",
      "img": "assets/partenaire-entreprises/LogoSite/covivio.jpg"
    },
    {
      "nom": "GSE",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.gsegroup.com/?gad_source=1&gbraid=0AAAAABHR9gHItAH0BoUAmXqgwDyxiNXVk&gclid=Cj0KCQjw6oi4BhD1ARIsAL6pox2uqavQ_NE2-ynnZJ-NkkPCViRn5w5iuszyBim328amx4bxYki6hTEaAlIFEALw_wcB",
      "img": "assets/partenaire-entreprises/LogoSite/GSE.jpg"
    },
    {
      "nom": "Groupe ADP",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.parisaeroport.fr/homepage-groupe",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe ADP.png"
    },
    {
      "nom": "Systra",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.systra.com/france/",
      "img": "assets/partenaire-entreprises/LogoSite/systra.JPG"
    },
    {
      "nom": "Spie CityNetworks",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.spie.com/fr",
      "img": "assets/partenaire-entreprises/LogoSite/Spie CityNetworks.png"
    },
    {
      "nom": "Essor",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.essor.group",
      "img": "assets/partenaire-entreprises/LogoSite/ESSOR.jpg"
    },
    {
      "nom": "Subsea 7",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.subsea7.com/en/index.html",
      "img": "assets/partenaire-entreprises/LogoSite/Subsea 7.jpeg"
    },
    {
      "nom": "Maia",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://groupe-maia.com/",
      "img": "assets/partenaire-entreprises/LogoSite/Maia.png"
    },
    {
      "nom": "Saipem SA",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.saipem.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Saipem SA.jpg"
    },
    {
      "nom": "Département des Hauts-de-Seine",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.hauts-de-seine.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Département des Hauts-de-Seine.jpg"
    },
    {
      "nom": "Nexity",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://nexity.group/recrutement",
      "img": "assets/partenaire-entreprises/LogoSite/Nexity.jpg"
    },
    {
      "nom": "TERIDEAL",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.terideal.fr",
      "img": "assets/partenaire-entreprises/LogoSite/TERIDEAL.jpg"
    },
    {
      "nom": "Edvance",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.edvance.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Edvance.png"
    },
    {
      "nom": "Balas ",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://groupe-balas.com",
      "img": "assets/partenaire-entreprises/LogoSite/Balas.png"
    },
    {
      "nom": "Baudin Châteauneuf",
      "Pack": "Plus",
      "Surface": 12,
      "site": "https://www.baudinchateauneuf.com",
      "img": "assets/partenaire-entreprises/LogoSite/Baudin Châteauneuf.jpg"
    },
    {
      "nom": "Perenco",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.perenco.com",
      "img": "assets/partenaire-entreprises/LogoSite/Perenco.png"
    },
    {
      "nom": "Eurogroup Consulting",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.eurogroupconsulting.com/fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Eurogroup Consulting.jpg"
    },
    {
      "nom": "Sadrin Rapin",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://sadrin-rapin.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Sadrin Rapin.jpg"
    },
    {
      "nom": "Azaleo",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://azaleo.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Azaleo.png"
    },
    {
      "nom": "Legendry",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.legendryconstruction.com",
      "img": "assets/partenaire-entreprises/LogoSite/Legendry.jpg"
    },
    {
      "nom": "Risk Control",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://risk-control.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Risk Control.png"
    },
    {
      "nom": "Talan",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://talan.com",
      "img": "assets/partenaire-entreprises/LogoSite/Talan.png"
    },
    {
      "nom": "Service d'Infrastructure de la Défense",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.defense.gouv.fr/sga/nous-connaitre/organisation-du-sga/directions/service-dinfrastructure-defense",
      "img": "assets/partenaire-entreprises/LogoSite/Service d_Infrastructure de la Défense.png"
    },
    {
      "nom": "Essec Business School",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.essec.edu/fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Essec Business School.jpg"
    },
    {
      "nom": "Builders and Partners (groupe Vertical Sea)",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.vertical-sea.com/le-groupe/",
      "img": "assets/partenaire-entreprises/LogoSite/Builders and Partners (groupe Vertical Sea).svg"
    },
    {
      "nom": "Tractebel Engineering S.A.",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://tractebel-engie.fr/fr",
      "img": "assets/partenaire-entreprises/LogoSite/Tractebel Engineering S.A..png"
    },
    {
      "nom": "Aptiskills",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.aptiskills.fr",
      "img": "assets/partenaire-entreprises/LogoSite/aptiskills_logo.jpg"
    },
    {
      "nom": "Arcadis",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.arcadis.com/fr-fr",
      "img": "assets/partenaire-entreprises/LogoSite/Arcadis.jpg"
    },
    {
      "nom": "BTP Consultants ",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.btp-consultants.fr",
      "img": "assets/partenaire-entreprises/LogoSite/BTP Consultants .png"
    },
    {
      "nom": "Méditerranée environnement",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.lajus.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Mediteranne environnement.png"
    },
    {
      "nom": "RABOT DUTILLEUL CONSTRUCTION",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.rabotdutilleul.com",
      "img": "assets/partenaire-entreprises/LogoSite/RABOT DUTILLEUL CONSTRUCTION.jpg"
    },
    {
      "nom": "Kardham",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.kardham.com",
      "img": "assets/partenaire-entreprises/LogoSite/Kardham.png"
    },
    {
      "nom": "SMAC",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.smac-sa.com",
      "img": "assets/partenaire-entreprises/LogoSite/smac.webp"
    },
    {
      "nom": "Groupe Unifer",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.uif-travaux.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Unifer.png"
    },
    {
      "nom": "Groupe IDEC",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.groupeidec.com",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe IDEC.png"
    },
    {
      "nom": "LEAF INGENIERIE",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://leaf-ingenierie.com",
      "img": "assets/partenaire-entreprises/LogoSite/leaf_ingnierie_logo.jpg"
    },
    {
      "nom": "H2air",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://h2air.fr",
      "img": "assets/partenaire-entreprises/LogoSite/H2air.jpg"
    },
    {
      "nom": "Deepki",
      "Pack": "Plus",
      "Surface": 9,
      "site": "https://www.deepki.com/fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Deepki.jpg"
    },
    {
      "nom": "SNCF",
      "Pack": "Simple",
      "Surface": 18,
      "site": "https://emploi.sncf.com/",
      "img": "assets/partenaire-entreprises/LogoSite/SNCF.png"
    },
    {
      "nom": "COBAT CONSTRUCTIONS",
      "Pack": "Simple",
      "Surface": 18,
      "site": "https://www.cobatconstructions.fr",
      "img": "assets/partenaire-entreprises/LogoSite/COBAT CONSTRUCTIONS.png"
    },
    {
      "nom": "CERN",
      "Pack": "Simple",
      "Surface": 18,
      "site": "https://home.cern/fr",
      "img": "assets/partenaire-entreprises/LogoSite/CERN.jpg"
    },
    {
      "nom": "Agap2 - Moongy",
      "Pack": "Simple",
      "Surface": 18,
      "site": "https://moongy.group/nos-societes/agap2/",
      "img": "assets/partenaire-entreprises/LogoSite/Agap2 - Moongy.png"
    },
    {
      "nom": "GAGNERAUD CONSTRUCTION",
      "Pack": "Simple",
      "Surface": 18,
      "site": "https://www.gagneraud.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Gagneraud.jpg"
    },
    {
      "nom": "Technip Energies",
      "Pack": "Simple",
      "Surface": 15,
      "site": "https://www.ten.com/fr",
      "img": "assets/partenaire-entreprises/LogoSite/Technip Energies.png"
    },
    {
      "nom": "Seqens",
      "Pack": "Simple",
      "Surface": 15,
      "site": "https://www.seqens.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Seqens.png"
    },
    {
      "nom": "TERNERGIE SOLUTIONS",
      "Pack": "Simple",
      "Surface": 15,
      "site": "https://tenergie.fr/nos-solutions/",
      "img": "assets/partenaire-entreprises/LogoSite/TERNERGIE SOLUTIONS.jpg"
    },
    {
      "nom": "Autodesk ",
      "Pack": "Simple",
      "Surface": 15,
      "site": "https://www.autodesk.com/fr",
      "img": "assets/partenaire-entreprises/LogoSite/autodesk-logo2022.webp"
    },
    {
      "nom": "Briand",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.briand.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Briand.jpg"
    },
    {
      "nom": "Aurige",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://aurige.group/fr/notregroupe",
      "img": "assets/partenaire-entreprises/LogoSite/Aurige.png"
    },
    {
      "nom": "KPMG",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://kpmg.com/fr/fr.html",
      "img": "assets/partenaire-entreprises/LogoSite/KPMG.jpg"
    },
    {
      "nom": "Eight Advisory",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.8advisory.com",
      "img": "assets/partenaire-entreprises/LogoSite/Eight Advisory.jpg"
    },
    {
      "nom": "EY",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.ey.com/fr_fr",
      "img": "assets/partenaire-entreprises/LogoSite/EY.jpg"
    },
    {
      "nom": "Lidl France",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://emplois.lidl.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Lidl France.png"
    },
    {
      "nom": "Infraneo",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.infraneo.com/groupe-infraneo/",
      "img": "assets/partenaire-entreprises/LogoSite/Infraneo.png"
    },
    {
      "nom": "EPC DEMOSTEN",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://epc-demosten.fr",
      "img": "assets/partenaire-entreprises/LogoSite/EPC DEMOSTEN.png"
    },
    {
      "nom": "Marine Nationale",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.defense.gouv.fr/marine",
      "img": "assets/partenaire-entreprises/LogoSite/Marine Nationale.jpg"
    },
    {
      "nom": "CET Ingénierie",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://cet-ingenierie.fr",
      "img": "assets/partenaire-entreprises/LogoSite/CET Ingénierie.jpg"
    },
    {
      "nom": "CESI",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.cesi.fr",
      "img": "assets/partenaire-entreprises/LogoSite/CESI.jpg"
    },
    {
      "nom": "Turner & Townsend",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.turnerandtownsend.com",
      "img": "assets/partenaire-entreprises/LogoSite/Turner & Townsend.png"
    },
    {
      "nom": "Chantiers de l'Atlantique",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://chantiers-atlantique.com",
      "img": "assets/partenaire-entreprises/LogoSite/Chantiers de l_Atlantique.svg"
    },
    {
      "nom": "Groupe Treuil",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.treuil.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe Treuil.jpg"
    },
    {
      "nom": "PHIDA groupe SA ",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://phida-groupe.ch",
      "img": "assets/partenaire-entreprises/LogoSite/Phida.png"
    },
    {
      "nom": "RIVP",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.rivp.fr",
      "img": "assets/partenaire-entreprises/LogoSite/RIVP.jpg"
    },
    {
      "nom": "SOCOTEC CONSTRUCTION",
      "Pack": "Simple",
      "Surface": 12,
      "site": "https://www.socotec.fr/votre-secteur/construction",
      "img": "assets/partenaire-entreprises/LogoSite/SOCOTEC CONSTRUCTION.png"
    },
    {
      "nom": "Gnat SA",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.gnat.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Gnat SA.png"
    },
    {
      "nom": "Groupe GB",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://groupe-gb.fr/notre-groupe/",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe GB.jpg"
    },
    {
      "nom": "European Homes",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://e-h.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/European Homes.jpg"
    },
    {
      "nom": "Quartus",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.groupe-quartus.com",
      "img": "assets/partenaire-entreprises/LogoSite/Quartus.png"
    },
    {
      "nom": "Deloitte",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www2.deloitte.com/fr/fr/pages/home.html",
      "img": "assets/partenaire-entreprises/LogoSite/Deloitte.jpg"
    },
    {
      "nom": "Colliers",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.colliers.com/fr-fr",
      "img": "assets/partenaire-entreprises/LogoSite/Colliers.png"
    },
    {
      "nom": "CEA",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.cea.fr",
      "img": "assets/partenaire-entreprises/LogoSite/CEA.jpg"
    },
    {
      "nom": "Calq SAS",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.calq.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Calq SAS.png"
    },
    {
      "nom": "Oméa",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.omeaconseil.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Oméa.jpg"
    },
    {
      "nom": "CIG",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.cig929394.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/CIG.jpg"
    },
    {
      "nom": "Maitre Cube",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://maitrecube.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Maitre cube.png"
    },
    {
      "nom": "Oteis",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.oteis.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Oteis.jpg"
    },
    {
      "nom": "TPF Ingénierie",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.tpf-i.fr",
      "img": "assets/partenaire-entreprises/LogoSite/TPF Ingénierie.png"
    },
    {
      "nom": "Epitech recrutement",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.e-epitech.com",
      "img": "assets/partenaire-entreprises/LogoSite/Epitech recrutement.png"
    },
    {
      "nom": "Build2B",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://build2b.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Build2B.png"
    },
    {
      "nom": "Parlym",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.parlym.com",
      "img": "assets/partenaire-entreprises/LogoSite/Parlym.png"
    },
    {
      "nom": "Groupe Fondasol",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.groupefondasol.com/fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe Fondasol.jpg"
    },
    {
      "nom": "SCE",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://sce.fr",
      "img": "assets/partenaire-entreprises/LogoSite/SCE.jpg"
    },
    {
      "nom": "GreenAffair",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.greenaffair.com",
      "img": "assets/partenaire-entreprises/LogoSite/GreenAffair.png"
    },
    {
      "nom": "Axa IM",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.axa-im.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Axa IM.jpeg"
    },
    {
      "nom": "Groupe RATP",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.ratp.fr/groupe-ratp",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe RATP.jpg"
    },
    {
      "nom": "Ekium",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.ekium.eu",
      "img": "assets/partenaire-entreprises/LogoSite/Ekium.jpg"
    },
    {
      "nom": "Arep",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.arep.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Arep.png"
    },
    {
      "nom": "APL Data Center",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.apl-datacenter.com/fr/",
      "img": "assets/partenaire-entreprises/LogoSite/APL Data Center.png"
    },
    {
      "nom": "Vicat",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.vicat.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Vicat.svg"
    },
    {
      "nom": "DEKRA services France ",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.dekra-industrial.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/DEKRA.svg"
    },
    {
      "nom": "Sia Partners",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.sia-partners.com/fr",
      "img": "assets/partenaire-entreprises/LogoSite/Sia Partners.png"
    },
    {
      "nom": "Groupe Angevin",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.groupe-angevin.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Groupe Angevin.png"
    },
    {
      "nom": "CBRE",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.cbre.fr",
      "img": "assets/partenaire-entreprises/LogoSite/CBRE.png"
    },
    {
      "nom": "Equad RCC",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.equad.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Equad RCC.jpg"
    },
    {
      "nom": "CDC habitat",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.cdc-habitat.fr",
      "img": "assets/partenaire-entreprises/LogoSite/CDC habitat.jpg"
    },
    {
      "nom": "BNP real Estate",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.realestate.bnpparibas.fr/fr",
      "img": "assets/partenaire-entreprises/LogoSite/BNP real Estate.png"
    },
    {
      "nom": "Cap ingelec",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.capingelec.com",
      "img": "assets/partenaire-entreprises/LogoSite/Cap ingelec.jpg"
    },
    {
      "nom": "Menard",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.menardfrance.fr/",
      "img": "assets/partenaire-entreprises/LogoSite/MENARD-LOGO-hori-120.jpg"
    },
    {
      "nom": "Piman consultants",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://piman-group.fr/entite/piman-consultants/",
      "img": "assets/partenaire-entreprises/LogoSite/Piman consultants.png"
    },
    {
      "nom": "PWC",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.pwc.fr/fr.html",
      "img": "assets/partenaire-entreprises/LogoSite/PWC.png"
    },
    {
      "nom": "Valorem",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.valorem-energie.com",
      "img": "assets/partenaire-entreprises/LogoSite/Valorem.jpg"
    },
    {
      "nom": "Est Ouvrages",
      "Pack": "Simple",
      "Surface": 9,
      "site": "http://estouvrages.com",
      "img": "assets/partenaire-entreprises/LogoSite/Est Ouvrages.png"
    },
    {
      "nom": "ENOE",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.enoe-energie.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Enoe energies.png"
    },
    {
      "nom": "RENOVER",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.renover.fr",
      "img": "assets/partenaire-entreprises/LogoSite/RENOVER.jsp.jpg"
    },
    {
      "nom": "EP2C Energy",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.ep2c-energy.com",
      "img": "assets/partenaire-entreprises/LogoSite/EP2C Energy.jpg"
    },
    {
      "nom": "Euretudes",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://euretudes.fr",
      "img": "assets/partenaire-entreprises/LogoSite/euretudes_logo.jpg"
    },
    {
      "nom": "SMABTP",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.smabtp.fr/sma/assurance/",
      "img": "assets/partenaire-entreprises/LogoSite/SMABTP.jpg"
    },
    {
      "nom": "Ariess Consulting ",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.ariess-consulting.eu",
      "img": "assets/partenaire-entreprises/LogoSite/Ariess Consulting .jpg"
    },
    {
      "nom": "Tasq",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://tasq-om.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Tasq.png"
    },
    {
      "nom": "GPC S.A",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://gpcsa.com",
      "img": "assets/partenaire-entreprises/LogoSite/GPC S.A.png"
    },
    {
      "nom": "MYRIUM",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.myrium.fr",
      "img": "assets/partenaire-entreprises/LogoSite/MYRIUM.webp"
    },
    {
      "nom": "AGILITE SOLUTIONS",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.agilitesolutions.com/?lang=fr",
      "img": "assets/partenaire-entreprises/LogoSite/Agilite_Solutions_RGB-002.jpg"
    },
    {
      "nom": "Oxiam",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://oxiam.fr",
      "img": "assets/partenaire-entreprises/LogoSite/Oxiam.png"
    },
    {
      "nom": "Alsea",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://www.alsea.eu",
      "img": "assets/partenaire-entreprises/LogoSite/Alsea.jpg"
    },
    {
      "nom": "ESCT",
      "Pack": "Simple",
      "Surface": 9,
      "site": "https://esct.fr",
      "img": "assets/partenaire-entreprises/LogoSite/esct.png"
    },
    {
      "nom": "Urbaine de Travaux",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://urbaine.fayat.com",
      "img": "assets/partenaire-entreprises/LogoSite/Urbaine de Travaux.jpg"
    },
    {
      "nom": "Darras et Jouanin",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://darras.fayat.com",
      "img": "assets/partenaire-entreprises/LogoSite/Darras et Jouanin.jpg"
    },
    {
      "nom": "Fayat Immobilier Idf",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://www.fayatimmobilier-idf.com",
      "img": "assets/partenaire-entreprises/LogoSite/Fayat Immobilier Idf.jpg"
    },
    {
      "nom": "Fayat bâtiment",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://batiment.fayat.com",
      "img": "assets/partenaire-entreprises/LogoSite/Fayat bâtiment.jpg"
    },
    {
      "nom": "Fayat Energie Services",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://energieservices.fayat.com",
      "img": "assets/partenaire-entreprises/LogoSite/Fayat Energie Services.jpg"
    },
    {
      "nom": "Fayat Métal",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://metal.fayat.com",
      "img": "assets/partenaire-entreprises/LogoSite/Fayat Métal.png"
    },
    {
      "nom": "Razel-Bec",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://razel-bec.fayat.com",
      "img": "assets/partenaire-entreprises/LogoSite/Razel-Bec.jpg"
    },
    {
      "nom": "SEFI-INTRAFOR (FAYAT FONDATIONS)",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://sefi-intrafor.fayat.com",
      "img": "assets/partenaire-entreprises/LogoSite/SEFI-INTRAFOR (FAYAT FONDATIONS).jpg"
    },
    {
      "nom": "Vinci construction",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://vinci-construction.com/fr/",
      "img": "assets/partenaire-entreprises/LogoSite/Vinci construction.jpg"
    },
    {
      "nom": "Demathieu Tralux",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://www.demathieu-bard.fr/actualites/tralux-recompense-par-un-prix-national-securite/",
      "img": "assets/partenaire-entreprises/LogoSite/Tralux.jpg"
    },
    {
      "nom": "Demathieu Immobilier",
      "Pack": "Book",
      "Surface": 0,
      "site": "https://demathieu-bard-immobilier.com",
      "img": "assets/partenaire-entreprises/LogoSite/Demathieu Bard Immobilier.png"
    },
    {
      "nom": "Vizcab",
      "Pack": "Start-up",
      "Surface": 0,
      "site": "https://vizcab.io",
      "img": "assets/partenaire-entreprises/LogoSite/Vizcab-Logo-Long-bleu-Signature.png"
    }
  ]

  ecole: any = [
    {
      "nom": "ESTP",
      "img": "assets/partenaire-ecole/Logos/ESTP LOGO.jpg",
      "site": "https://www.estp.fr"
    },
    {
      "nom": "HEC",
      "img": "assets/partenaire-ecole/Logos/HEC PARIS.jpg",
      "site": "https://www.hec.edu/fr"
    },
    {
      "nom": "ENSTA Paris",
      "site": "https://www.ensta-paris.fr/",
      "img": "assets/partenaire-ecole/Logos/ensta paris.png"
    },
    {
      "nom": "ESSEC",
      "img": "assets/partenaire-ecole/Logos/essec.jpg",
      "site": "https://www.essec.edu/fr/"
    },
    {
      "nom": "Arts et Métiers",
      "img": "assets/partenaire-ecole/Logos/arts et metiers.png",
      "site": "https://artsetmetiers.fr/fr",
    },
    {
      "nom": "EDHEC",
      "img": "assets/partenaire-ecole/Logos/EDHEC.jpg",
      "site": "https://www.edhec.edu/fr"
    },
    {
      "nom": "ENSA Paris La Villette",
      "img": "assets/partenaire-ecole/Logos/ENSA La Villette.png",
      "site": "http://www.paris-lavillette.archi.fr/"
    },
    {
      "nom": "EPF",
      "img": "assets/partenaire-ecole/Logos/EPF.jpeg",
      "site": "https://www.epf.fr"
    },
    {
      "nom": "ECE Paris",
      "img": "assets/partenaire-ecole/Logos/ECE_Paris-510x510.jpg",
      "site": "https://www.ece.fr"
    },

    {
      "nom": "CESI",
      "img": "assets/partenaire-ecole/Logos/CESI.jpg",
      "site": "https://www.cesi.fr"
    },
    {
      "nom": "Ecole supérieure du Bois",
      "img": "assets/partenaire-ecole/Logos/Ecole supérieure du bois.png",
      "site": "https://www.esb-campus.fr/"
    },
    {
      "nom": "CY Tech Cergy",
      "img": "assets/partenaire-ecole/Logos/cy tech cergy.png",
      "site": "https://cytech.cyu.fr/"
    },
    {
      "nom": "Polytech Paris Saclay",
      "img": "assets/partenaire-ecole/Logos/polytech paris saclay.png",
      "site": "https://www.polytech.universite-paris-saclay.fr/"
    },
    {
      "nom": "IPSA",
      "img": "assets/partenaire-ecole/Logos/IPSA.jpg",
      "site": "https://www.ipsa.fr/"
    },
    {
      "nom": "Ecotec",
      "img": "assets/partenaire-ecole/Logos/ECOTEC-Logo_slider.png",
      "site": "https://www.ecotec.org/"
    },
    {
      "nom": "ESIEA",
      "img": "assets/partenaire-ecole/Logos/esiea.jpg",
      "site": "https://www.esiea.fr/"
    },

    {
      "nom": "CFA Noisy le grand",
      "img": "assets/partenaire-ecole/Logos/CFA Noisy le grand.jpg",
      "site": "https://btpcfa-iledefrance.fr/"
    },
    {
      "nom": "INSA Rennes",
      "img": "assets/partenaire-ecole/Logos/INSA Rennes.jpg",
      "site": "https://www.insa-rennes.fr/"
    },
    {
      "nom": "INSA Haut de France",
      "img": "assets/partenaire-ecole/Logos/insa-hauts-de-france.png",
      "site": "https://www.insa-hautsdefrance.fr/"
    },
    {
      "nom": "ECAM EPMI",
      "img": "assets/partenaire-ecole/Logos/ECAM EPMI.png",
      "site": "https://www.ecam-epmi.fr/"
    },
    {
      "nom": "ESTACA",
      "img": "assets/partenaire-ecole/Logos/estaca.jpg",
      "site": "https://www.estaca.fr/"
    },
    {
      "nom": "INSTN",
      "img": "assets/partenaire-ecole/Logos/INSTN_logo.jpg",
      "site": "https://instn.cea.fr/"
    },
    {
      "nom": "Ecole d'ingénieur Denis Diderot",
      "img": "assets/partenaire-ecole/Logos/Ecole Denis Diderot.png",
      "site": "https://u-paris.fr/eidd/"
    },
    {
      "nom": "Télécom Physique Strasbourg",
      "img": "assets/partenaire-ecole/Logos/telecom physique strasbourg.png",
      "site": "https://www.telecom-physique.fr/"
    },
    {
      "nom": "ESAIP La Salle",
      "img": "assets/partenaire-ecole/Logos/ESAIP.jpg",
      "site": "https://www.esaip.org/"
    },
    {
      "nom": "ESITC",
      "img": "assets/partenaire-ecole/Logos/ESITC.jpg",
      "site": "https://www.esitc-paris.fr/fr"
    },
    {
      "nom": "Y Schools",
      "img": "assets/partenaire-ecole/Logos/Y SCHOOLS.png",
      "site": "https://yschools.fr/"
    },
    {
      "nom": "Ecole Camondo",
      "img": "assets/partenaire-ecole/Logos/Camondo.jpg",
      "site": "https://www.ecolecamondo.fr"
    },

    {
      "nom": "Ecole Spéciale d'Architecture",
      "img": "assets/partenaire-ecole/Logos/Ecole spéciale d_architecture.jpg",
      "site": "https://www.esa-paris.fr/spip.php?page=sommaire"
    },
    {
      "nom": "ENSA Paris Val de Seine",
      "img": "assets/partenaire-ecole/Logos/ENSA Paris Val de Seine.jpg",
      "site": "https://www.paris-valdeseine.archi.fr/accueil.html"
    },


    {
      "nom": "IPAG",
      "img": "assets/partenaire-ecole/Logos/ipag-logo.png",
      "site": "https://www.ipag.edu/"
    }
  ]
  presse: any = [
    {
      "MEDIA": "USINE NOUVELLE",
      "nom": "L'Usine Nouvelle",
      "description": "L'Usine Nouvelle décrypte quotidiennement l'actualité de l'industrie. A travers le site internet et le magazine hebdomadaire, retrouvez l'actualité clé des secteurs aéro, auto, énergie, agro et bien d'autres en France et à l'étranger.\n",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "Marie Caland – Directrice Commerciale mcaland@infopro-digital.com – 01 79 06 73 87 / 07 44 09 33 64\n",
      "Slogan": "Soyez acteur du changement, contribuez à un avenir durable en postulant maintenant !",
      "site": "https://www.usinenouvelle.com",
      "Classement": 7,
      "img": "assets/partenaire-presse/Logos/Usine nouvelle.jpg"
    },
    {
      "MEDIA": "Hors Site",
      "nom": "Hors Site",
      "description": "Le magazine HORS SITE est un magazine trimestriel de presse professionnelle spécialisé dans l’univers de la construction hors-site. Retrouvez à chaque numéro des interviews de personnalités de la filière, des reportages et des focus sur des innovations.\n",
      "Implantation": "Nationale",
      "nombre de collaborateurs": 5,
      "Activité (385 caractères)": "Le magazine HOIRS SITE est édité par le groupe HORS SITE qui a pour objectif de favoriser le déploiement des méthodes et processus de construction hors-site dans le monde de la construction. Nos activités vont de l’information à l’accompagnement stratégique et technique des maitrises d’ouvrage et donneurs d’ordres. Nous développons également une offre de formation et d’accompagnement destiné au services RH.\n",
      "Contact": "Olivier Villeneuve olivier@hors-site.com\n",
      "Slogan": "La construction qui défie les conventions\n",
      "site": "https:// www.hors-site.com",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/Hors Site.jpg"

    },
    {
      "MEDIA": "Le Figaro Étudiant",
      "nom": "Le Figaro Étudiant",
      "description": "Le site du Figaro dédié aux étudiants et aux parents. Trouvez les écoles, les formations, les métiers, les classements, les concours et les événements qui vous intéressent.\n",
      "Implantation": "Paris",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "Figaro Classifieds, filiale du Groupe Figaro, rassemble à la fois des activités de média et de marketplace, spécialisées dans les annonces classées et les outils destinés aux secteurs de l’Emploi, de l’Immobilier et de l’Éducation.\nNotre mission est claire : aider chacun à faire le bon choix aux moments clés de sa vie personnelle et professionnelle.\n",
      "Contact": "",
      "Slogan": "Actualité, Conseils pour bien s'orienter",
      "site": "https://www.etudiant.lefigaro.fr",
      "Classement": 4,
      "img": "assets/partenaire-presse/Logos/Le Figaro.png"
    },
    {
      "MEDIA": "Toiture Magazine",
      "nom": "Toiture Magazine",
      "description": " Toiture Magazine est un magazine essentiel pour les professionnels de la toiture, offrant des nouveautés sur les matériaux (tuile, ardoise, métal, panneaux solaires) et des solutions techniques (pose, rénovation, isolation, étanchéité). Chaque numéro présente des enquêtes sur les chantiers et innovations produits.\n",
      "Implantation": "Paris 20",
      "nombre de collaborateurs": 10,
      "Activité (385 caractères)": "Le groupe Bois News Media est un acteur majeur dans l'industrie du bois avec quatre publications spécialisées : BOISmag, Artisans & Bois, Toiture Magazine, et L'Agenceur Magazine. Chaque titre couvre un aspect essentiel du secteur, offrant des informations aux professionnels. Le groupe propose également WoodPartners.fr, une plateforme digitale facilitant l'accès aux fournisseurs et opportunités.",
      "Contact": "Iaconelli Gloria 41 rue du télégraphe 75020 Paris \n",
      "Slogan": "L'artisan couvreur",
      "site": "https://www.toituremagazine.com",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/toiture magazine logo.png"
    },
    {
      "MEDIA": "Batinfo",
      "nom": "BATINFO",
      "description": "Portail d’information pour les professionnels du BTP",
      "Implantation": "Paris 16",
      "nombre de collaborateurs": 5,
      "Activité (385 caractères)": "",
      "Contact": "info@batinfo.com / redaction@batinfo.com\n",
      "Slogan": "",
      "site": "https://www.batinfo.com",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/Batinfo.jpg"
    },
    {
      "MEDIA": "Chantiers de France",
      "nom": "Chantiers de France",
      "description": "",
      "Implantation": "Paris",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": " GOZLAN Jessica / j-gozlan@pyc.fr / 01 53 26 87 74 / 06 09 24 11 67\n",
      "Slogan": " Chantiers de France est le magazine dédié aux spécialités de travaux publics et à la filière matériels.\n",
      "site": "https://www.chantiersdefrance.fr",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/Chantiers de France.jpg"
    },
    {
      "MEDIA": "Génie Climatique Magazine",
      "nom": "Génie climatique Magazine",
      "description": "Afterfioul, ventilation et QAI, avenir de la PAC et du bois-énergie, évolution de la réglementation, Génie Climatique Magazine fait le point sur les enjeux de votre profession et vous permet de mieux appréhender le marché.\n",
      "Implantation": "Paris",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "Maëva Daspe / m-daspe@pyc.fr / 01 53 26 47 83 / 06 27 66 68 91\n",
      "Slogan": "Génie Climatique, premier sur l’info du génie climatique\n",
      "site": "https://www.genieclimatique.fr",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/Copie de LOGO_GC-PROPOSITIONS_couleurs.jpg"
    },
    {
      "MEDIA": "BATIMAT",
      "nom": "BATIMAT",
      "description": "Pendant 4 jours du 30 septembre au 3 octobre 2024, les salons BATIMAT, IDÉOBAIN, INTERCLIMA et EQUIPBAIE/METALEXPO, ont accueilli plus de 135 000 professionnels du bâtiment et de la construction.\n\nBatimat s’est imposé comme un évènement d’influence sur l’ensemble des sujets liés à la transformation du secteur et notamment la rénovation énergétique et a pu compter sur la présence et la forte implication des fédérations du secteur.\n\nD’ores et déjà, le prochain rendez-vous est fixé du 28 septembre au 1er octobre 2026, à Paris Expo de la Porte de Versailles.",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.batimat.com",
      "Classement": 3,
      "img": "assets/partenaire-presse/Logos/Batimat.png"
    },
    {
      "MEDIA": "Renodays",
      "nom": "Renodays",
      "description": "ENGAGÉS pour le climat, les citoyens, et l’emploi. \nLes professionnels du bâtiment, de l'immobilier, les institutionnels et les territoires se mobilisent tous les 7 et 8 octobre 2025, à Paris, autour d'un même but : répondre efficacement aux objectifs nationaux de rénovation énergétique des bâtiments.",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.renodays.com",
      "Classement": 8,
      "img": "assets/partenaire-presse/Logos/renodays logo.png"
    },
    {
      "MEDIA": "Cayola Médias",
      "nom": "Cayola Médias",
      "description": "Connecter. Inspirer. Informer.\nNous sommes Cayola Médias, constructeurs de notoriété. De la presse aux podcasts, des réseaux sociaux aux évènements, nous construisons la notoriété de nos clients en proposant des opportunités de communication sur mesure.\n",
      "Implantation": "3 Quai Conti – 78430 Louveciennes\n",
      "nombre de collaborateurs": 20,
      "Activité (385 caractères)": "Parce qu’aujourd’hui, il n’y a plus de petits médias, nous sommes dans une démarche constante d’innovation afin de proposer le meilleur écosystème médiatique à nos partenaires tout en restant en phase avec les attentes de nos abonnés.\n",
      "Contact": "direction@cayola-medias.com – 01 30 08 14 14 – 3 Quai Conti – Louveciennes\n",
      "Slogan": "Nous sommes Cayola Médias, constructeurs de notoriété.\n",
      "site": "https://www.cayola-medias.com\n",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/Cayola Media.png"
    },
    {
      "MEDIA": "Architecture Bois Magazine",
      "nom": "ARCHITECTURE BOIS",
      "description": "Architecture Bois est un magazine d’informations, spécialisé sur la construction et la maison bois. Depuis 2004, nous analysons et relayons le developpement de la construction bois à travers des dossiers d’informations, actualités et innovations produits, des reportages de bâtiments et maison bois.\n",
      "Implantation": "Chez les marchands de journaux et site web\n",
      "nombre de collaborateurs": 6,
      "Activité (385 caractères)": "Serum Presse édite de nombreux magazines d’informations sur la construction bois. Les magazines s’adressent aux professionnels du bâtiments intéressés par les systèmes constructifs bois, et mixtes ainsi que par l’utilisation de matériaux biosourcés pour la décarbonation du bâtiment.\n",
      "Contact": "Maxime Simonin max.simonin@architecturebois.fr\n",
      "Slogan": "S’informer est essentiel.",
      "site": "https:// www.architecturebois.fr",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/Architecture Bois.jpg"
    },
    {
      "MEDIA": "CFP",
      "nom": "Chaud Froid Performance",
      "description": "La revue technique de référence des prescripteurs, concepteurs et entreprises de génie climatique, aéraulique, froid, plomberie-sanitaire, distribution hydraulique et énergies renouvelables. Toujours à l'affût de l'actualité du bâtiment performant et fort d'une audience de plus de 50 000 lecteurs professionnels captifs par numéro, la revue CFP est la revue la plus lue du secteur",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.lebatimentperformant.fr",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/LOGO CFP 2019 VERT BASELINE HD.png"
    },
    {
      "MEDIA": "FORBES",
      "nom": "FORBES",
      "description": "Forbes est le seul média mondialement connu synonyme d'ENTREPRENEURIAT, de RÉUSSITE et D'EXCELLENCE.\nForbes Magazine, plus ancien titre Business des Etats-Unis propose depuis 2016 toute son actualité en français sur son site: forbes.fr et depuis le 6 octobre 2017 propose une version papier.\nRetrouvez dans Forbes toute l'actualité Business, Finance, Technologie, Management, Entrepreneurs, Luxe, Lifestyle et les Classements qui font référence dans le monde.\nForbes touche plus de 94 millions de lecteurs dans le monde avec ses 38 éditions locales .",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.forbes.fr",
      "Classement": 1,
      "img": "assets/partenaire-presse/Logos/Forbes.jpeg"
    },
    {
      "MEDIA": "Le Moniteur",
      "nom": "Le Moniteur",
      "description": "Média leader du secteur du BTP, Le Moniteur compte plus d’1,5 million de visites par mois (APCM juillet 2024). Sa rédaction décrypte au quotidien toute l’actualité économique, sociale, technique, architecturale et réglementaire du bâtiment et des travaux publics. Du financement à l’exploitation des ouvrages et des grands projets d’aménagement du territoire, en passant par leur conception et leur réalisation, elle interroge chaque phase de l’acte de construire.",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.lemoniteur.fr",
      "Classement": 6,
      "img": "assets/partenaire-presse/Logos/Le Moniteur.png"
    },
    {
      "MEDIA": "Route Actualité",
      "nom": "Route Actualité",
      "description": "Avec une approche technique et pratique, Route Actualité délivre à la communauté routière une information spécifique centrée sur ses problématiques. Chantiers, matériels et matériaux, retours d’expérience, R&D, Route Actualité est le magazine ultra-ciblé du secteur, incontournable depuis plus de 20 ans.",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.pyc.fr",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/Route Actualité.png"
    },
    {
      "MEDIA": "La Gazette des communes",
      "nom": "La Gazette des communes",
      "description": "La Gazette des communes est le média professionnel de référence des décideurs des collectivités territoriales, agents et élus. Sur ses supports numériques et papier, elle décrypte l’actualité des politiques publiques et du statut de la fonction publique.",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.lagazettedescommunes.fr",
      "Classement": null,
      "img": "assets/partenaire-presse/Logos/la-gazette-des-communes-logo-vector.png"
    },
    {
      "MEDIA": "Les Echos",
      "nom": "Les Echos",
      "description": "Les Echos est un journal français qui couvre l'information économique, politique, internationale et culturelle. Retrouvez sur LesEchos.fr toute l'actualité économique et financière en France et dans le monde, découvrez des analyses exclusives, dossiers spéciaux, décryptages, chroniques et grands formats.\n",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.lesechos.fr",
      "Classement": 2,
      "img": "assets/partenaire-presse/Logos/echo.PNG"
    },
    {
      "MEDIA": "Le Parisien Étudiant",
      "nom": "Le Parisien Étudiant",
      "description": "",
      "Implantation": "",
      "nombre de collaborateurs": null,
      "Activité (385 caractères)": "",
      "Contact": "",
      "Slogan": "",
      "site": "https://www.leparisien.fr/etudiant/",
      "Classement": 5,
      "img": "assets/partenaire-presse/Logos/pariesienetudient.PNG"
    }
  ]
  loopData: any;
  dataType!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.dataType = params['type'];
      if (params['type'] === 'entreprise') {
        this.entreprise.sort((a: any, b: any) => {
          // Check if both have "Plus" pack
          const aPlus = a.Pack === 'Plus' ? 1 : 0;
          const bPlus = b.Pack === 'Plus' ? 1 : 0;

          // Sort by Pack type first (Plus on top)
          if (aPlus !== bPlus) {
            return bPlus - aPlus;
          }

          // If both have the same Pack type, sort by Surface
          return b.Surface - a.Surface;
        });
        this.loopData = this.entreprise;
      } else if (params['type'] === 'ecole') {
        this.loopData = this.ecole;
      }
      else {
        this.loopData = this.presse;
      }
    });
  }
}
