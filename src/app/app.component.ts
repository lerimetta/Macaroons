import { Component } from '@angular/core';
import { ProductType } from './types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public advantages = [
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

  public goods: ProductType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      price: '1,70'
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      price: '1,70'
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      price: '1,70'
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      price: '1,70'
    },
  ]

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }
  public showPresent: boolean = true;
  public phoneNumber = '+375 (29) 368-98-68';
  public instagram = 'https://www.instagram.com';
}
