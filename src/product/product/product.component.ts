import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
  }

  public products: Product[] = [
    {
      id: 1,
      name: 'Diamond Vine Circle Pendant',
      price: 6800,
      description: 'With an intensity that rivals the night sky, we celebrate the blazing briliance of our diamonds.',
      detail: ' Mixed-cut diamonds add dimension to the fluid fronts of this striking pendant. 18k rose gold with round brilliant and marquise diamonds, size large.',
      quantity: 50,
      categoryId: 4,
      genderId: 1
    },
    {
      id: 2,
      name: 'Pearl and Diamond Earrings',
      price: 7200,
      description: 'Inspired by the fire and radiance of our superlative diamonds, we use a unique combination of cuts for a distinctly romantic sensibility. Platinum with South Sea cultured pearls and round brilliant diamonds.',
      detail: ' Pearls, 11-12 mm. Diamonds, carat total weight .57.',
      quantity: 50,
      categoryId: 3,
      genderId: 1
    },
    {
      id: 3,
      name: 'Makers 1.D. Tag Pendant  ',
      price: 2100,
      description: 'This rectangular I.D. tag pendant is designed is sterling silver and 18k gold for a sleek style statement. Crafted with a makers symbol inspired by the renowned Tiffany hollowware shop. Personalize this contemporary tag pendant with custom engraving.',
      detail: ' Sterling silver and 18k gold. Tag, 13x.7. On a 24" chain.',
      quantity: 50,
      categoryId: 4,
      genderId: 2
    },
    {
      id: 4,
      name: 'Diamond and Pink Opal Circle Pendant',
      price: 2550,
      description: 'Traced with scintillating diamonds, this circle pendant features pink opal, a highly covetes stone found in nature. The luminous pink hue of the stone beautifully accents the radiant 18k rose gold design.',
      detail: '18k rose gold with pink opal and round brilliant diamonds. Circle, 16 mm diameter. Carat total weight 05.',
      quantity: 50,
      categoryId: 4,
      genderId: 1
    },
    {
      id: 5,
      name: 'Makers Bar Pendnt in 18k Gold',
      price: 2800,
      description: 'This pendant\'s statement-making vertical bar, designed in warm 18k gold, is accented with a makers symbol. Style this bar pendant on its own or mix and  match with other jewelry.',
      detail: '18k gold. Bar, 1.4" long. On a 24" chain.',
      quantity: 50,
      categoryId: 4,
      genderId: 1
    },
    {
      id: 6,
      name: 'Markers 27 mm Square Watch',
      price: 3400,
      description: 'Watch in stainless steel with a dark gray dial. 27 x 27 mm case. Self-winding mechanical movement.',
      detail: 'Power reserve 38 hours. Water resistant to 50 meters/ 160 feet/5 ATM. Swiss-made.',
      quantity: 50,
      categoryId: 6,
      genderId: 2
    },
  ];

  ngOnInit(): void {
  }

}
