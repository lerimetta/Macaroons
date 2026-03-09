import { Component, OnInit } from '@angular/core';
import { ProductType } from './types/product.type';
import { AdvantageType } from './types/advantage.type';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ]

  goods: ProductType[] = [];

  formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }
  constructor(private productService: ProductService, public cartService: CartService) {

  }

  ngOnInit(): void {
    this.goods = this.productService.getProducts();
  }


  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  addToCart(product: ProductType, target: HTMLElement): void {
    // this.scrollTo(target);
    // this.formValues.productTitle = product.title.toUpperCase();
    alert(product.title + ' добавлен в корзину!');
    this.cartService.count++;
    this.cartService.total += product.price;
  }
  showPresent: boolean = true;
  phoneNumber = '375293689868';
  instagram = 'https://www.instagram.com';
}
