import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memmbres',
  templateUrl: './memmbres.component.html',
  styleUrl: './memmbres.component.scss'
})
export class MemmbresComponent {

  bureau: any[] = [
    {
      "fonction": "Président",
      "prenom": "Hugo",
      "nom": "Darder",
      "Classe 2024-2025": "TP3",
      "mail": "hugo.darder@estp.fr",
      "N°tel": "06 65 30 50 34",
      "link": "https://www.linkedin.com/in/hugo-darder-257a6a22a/?originalSubdomain=fr"
    },
    {
      "fonction": "Vice Président",
      "prenom": "Samuel",
      "nom": "Balouka",
      "Classe 2024-2025": "B3",
      "mail": "samuel.balouka@estp.fr",
      "N°tel": "07 81 99 67 35",
      "link": "https://www.linkedin.com/in/samuel-balouka/"
    },
    {
      "fonction": "Trésorier",
      "prenom": "Hugo",
      "nom": "Chovaux",
      "Classe 2024-2025": "AI7",
      "mail": "hugo.chovaux@estp.fr",
      "N°tel": "06 31 84 04 05",
      "link": "https://www.linkedin.com/in/hugo-chovaux-b9aa88220/"
    },
    {
      "fonction": "Secrétaire",
      "prenom": "Mahaut",
      "nom": "Cautela",
      "Classe 2024-2025": "Delta 2",
      "mail": "mahaut.cautela@estp.fr",
      "N°tel": "06 51 40 76 71",
      "link": "https://www.linkedin.com/in/mahaut-cautela/"
    }
  ];
  comm: any[] = [
    {
      "fonction": "Responsable du pôle communication",
      "prenom": "Mathys",
      "nom": "Coulibaly",
      "Classe 2024-2025": "B3",
      "mail": "mathys.coulibaly@estp.fr",
      "N°tel": "06 87 62 94 67",
      "link": "https://www.linkedin.com/in/mathys-coulibaly-489617244/"
    },
    {
      "fonction": "Graphiste",
      "prenom": "Vanathy",
      "nom": "Kunasingam",
      "Classe 2024-2025": "AI6",
      "mail": "vanathy.kunasingam@estp.fr",
      "N°tel": "06 54 45 12 93",
      "link": "https://www.linkedin.com/in/vanathy-kunasingam-5aa93b19a/"
    },
    {
      "fonction": "Community Manager",
      "prenom": "Kahina",
      "nom": "Saibi",
      "Classe 2024-2025": "IA3",
      "mail": "kahina.saibi@estp.fr",
      "N°tel": "07 81 61 67 66",
      "link": "https://www.linkedin.com/in/kahina-saïbi-855016245/"
    },
    {
      "fonction": "Responsable Vidéo",
      "prenom": "Perla",
      "nom": "Scemama",
      "Classe 2024-2025": "Kappa 2",
      "mail": "perla.scemama@estp.fr",
      "N°tel": "06 13 57 16 24",
      "link": "https://www.linkedin.com/in/perla-scemama-37073a287/"
    },
    {
      "fonction": "Editrice",
      "prenom": "Eva",
      "nom": "Barkate",
      "Classe 2024-2025": "Kappa 2",
      "mail": "eva.barkate@estp.fr",
      "N°tel": "06 85 58 49 92",
      "link": "https://www.linkedin.com/in/eva-barkate-a65a00289/"
    },
    {
      "fonction": "Responsable Digital",
      "prenom": "Abdelghafour",
      "nom": "El Gouddi",
      "Classe 2024-2025": "AI7",
      "mail": "abdelghafour.elgouddi@estp.fr",
      "N°tel": "06 49 10 64 63",
      "link": "https://www.linkedin.com/in/abdelghafour-el-gouddi-571193225/"
    }
  ];
  commer: any[] = [
    {
      "fonction": "Responsable du pôle commercial",
      "prenom": "Pierre-Louis",
      "nom": "Géli",
      "Classe 2024-2025": "GME3",
      "mail": "pierrelouis.geli@estp.fr",
      "N°tel": "06 41 53 91 42",
      "link": "https://www.linkedin.com/in/pierre-louis-géli/?originalSubdomain=fr"
    },
    {
      "fonction": "Commercial",
      "prenom": "Antoine",
      "nom": "Pieraerts",
      "Classe 2024-2025": "Sigma 2",
      "mail": "antoine.pieraerts@estp.fr",
      "N°tel": "07 67 20 69 38",
      "link": "https://www.linkedin.com/in/antoine-pieraerts-2309b1183/?originalSubdomain=fr"
    },
    {
      "fonction": "Commercial",
      "prenom": "Arthur",
      "nom": "Dragon",
      "Classe 2024-2025": "TP3",
      "mail": "dragonarthur2001@yahoo.fr",
      "N°tel": "07 69 12 92 71",
      "link": "https://www.linkedin.com/in/arthur-dragon/?originalSubdomain=fr"
    },
    {
      "fonction": "Commerciale",
      "prenom": "Albane",
      "nom": "Carré",
      "Classe 2024-2025": "Delta 2",
      "mail": "albane.carre@estp.fr",
      "N°tel": "06 73 05 18 81",
      "link": "https://www.linkedin.com/in/albane-carré-ac03/?originalSubdomain=fr"
    },
    {
      "fonction": "Commerciale",
      "prenom": "Alice",
      "nom": "Douard",
      "Classe 2024-2025": "IA2",
      "mail": "alice.douard@estp.fr",
      "N°tel": "07 81 33 78 87",
      "link": "https://www.linkedin.com/in/alice-douard-041107255/"
    },
    {
      "fonction": "Commercial",
      "prenom": "Alban",
      "nom": "de Josnières",
      "Classe 2024-2025": "Delta 2",
      "mail": "alban.dejosnieres@estp.fr",
      "N°tel": "06 30 43 17 73",
      "link": "https://www.linkedin.com/in/alban-de-josnières-aba70b291/"
    },
    {
      "fonction": "Commercial",
      "prenom": "Cellou",
      "nom": "Bah",
      "Classe 2024-2025": "Kappa 2",
      "mail": "cellou.bah@estp.fr",
      "N°tel": "06 29 56 78 90",
      "link": "https://www.linkedin.com/in/cellou-bah-b266b5299/?originalSubdomain=fr"
    },
    {
      "fonction": "Commerciale",
      "prenom": "Calypso",
      "nom": "Siou",
      "Classe 2024-2025": "CE2",
      "mail": "calypso.siou@estp.fr",
      "N°tel": "06 49 63 56 55",
      "link": "https://www.linkedin.com/in/calypso-siou-196b4b300/"
    },
    {
      "fonction": "Commerciale",
      "prenom": "Lili",
      "nom": "Bressan",
      "Classe 2024-2025": "CE2",
      "mail": "lili.bressan@estp.fr",
      "N°tel": "07 63 87 77 34",
      "link": "https://www.linkedin.com/in/lili-bressan-47930229b/"
    },
    {
      "fonction": "Commercial",
      "prenom": "Marceau",
      "nom": "Perret",
      "Classe 2024-2025": "Sigma 2",
      "mail": "marceau.perret@estp.fr",
      "N°tel": "07 81 25 67 88",
      "link": "https://www.linkedin.com/in/marceau-perret-940771250/"
    },
    {
      "fonction": "Commercial",
      "prenom": "Yanis",
      "nom": "Allas",
      "Classe 2024-2025": "CE2",
      "mail": "yanis.allas@estp.fr",
      "N°tel": "07 68 08 78 23",
      "link": "https://www.linkedin.com/in/yanis-allas-5600b4294/"
    }
  ];
  log: any[] = [
    {
      "fonction": "Responsable du pôle logistique",
      "prenom": "Louis",
      "nom": "Métra",
      "Classe 2024-2025": "B3",
      "mail": "louis.metra@estp.fr",
      "N°tel": "07 81 78 43 03",
      "link": "https://www.linkedin.com/in/louis-metra-328824259/"
    },
    {
      "fonction": "Responsable Plan",
      "prenom": "Antony",
      "nom": "de Bona",
      "Classe 2024-2025": "IA2",
      "mail": "anthony.debona@estp.fr",
      "N°tel": "07 83 19 40 52",
      "link": "https://www.linkedin.com/in/anthony-de-bona-6945b1229/"
    },
    {
      "fonction": "Responsable Conférence",
      "prenom": "Marwa",
      "nom": "Khdoud",
      "Classe 2024-2025": "CE2",
      "mail": "marwa.khdoud@estp.fr",
      "N°tel": "06 36 46 89 62",
      "link": "https://www.linkedin.com/in/marwa-khdoud-3b854627a/"
    },
    {
      "fonction": "Responsable Réception",
      "prenom": "Orphée",
      "nom": "Bowen",
      "Classe 2024-2025": "Kappa 2",
      "mail": "orphee.bowen@estp.fr",
      "N°tel": "07 80 32 56 85",
      "link": "https://www.linkedin.com/in/orphee-bowen-squires-1ab74a29a/"
    },
    {
      "fonction": "Responsable Mobilier",
      "prenom": "Julien",
      "nom": "Fromont",
      "Classe 2024-2025": "SIGMA 2",
      "mail": "julien.fromont@estp.fr",
      "N°tel": "06 15 04 47 56",
      "link": "https://www.linkedin.com/in/julien-fromont-91467a27b/"
    }
  ];
  dataType!: string;

  loopData: any[] = [];
  title: string = "";
  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['type'] === 'bur') {
        this.loopData = this.bureau;
        this.title = "Bureau"
      } else if (params['type'] === 'com') {
        this.loopData = this.comm;
        this.title = "Le pôle communication"
      }
      else if (params['type'] === 'commer') {
        this.loopData = this.commer;
        this.title = "Le pôle commercial"
      }
      else if (params['type'] === 'log') {
        this.loopData = this.log;
        this.title = "Le pôle logistique"
      }
    });
  }
}
