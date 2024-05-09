import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  category: any = {
    title: 'Popular Categories',
    categories: [
      { name: 'Modern Edition' },
      { name: 'Professional Edition' },
      { name: 'Sport Edition' },
      { name: 'Classic Edition' },
      { name: 'Progressive Edition' },
      { name: 'Color Edition' },
    ],
  };

  productCard: any = [
    {
      id: 1,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 2,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 3,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
  ];

  bestProducts: any = [
    {
      id: 1,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 2,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 3,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 4,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 5,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 6,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 7,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 8,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
  ];

  blogCard: any = [
    {
      id: 1,
      img: 'https://rb.gy/fgt72l',
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
      date: 'Dec 20-12-2024',
      category: 'Blog Technology',
      info: 'There are many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected of passages Lorem available, but the majority have suffered alteration in some form, by injected of passages',
    },
    {
      id: 2,
      img: 'https://rb.gy/9pcc46',
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
      date: 'Dec 20-12-2024',
      category: 'Blog Technology',
      info: 'There are many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected of passages Lorem available, but the majority have suffered alteration in some form, by injected of passages',
    },
    {
      id: 3,
      img: 'https://rb.gy/yn6tq2',
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random',
      date: 'Dec 20-12-2024',
      category: 'Blog Technology',
      info: 'There are many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected of passages Lorem available, but the majority have suffered alteration in some form, by injected of passages',
    },
  ];

  saleCategory: any = [
    {
      title: 'Hot Sale',
      products: [
        {
          id: 1,
          img: 'https://rb.gy/9pfer2',
          title: 'Fatex Headphone',
          price: '$110.00',
        },
        {
          id: 2,
          img: 'https://rb.gy/9pfer2',
          title: 'Fatex Headphone',
          price: '$110.00',
        },
        {
          id: 3,
          img: 'https://rb.gy/9pfer2',
          title: 'Fatex Headphone',
          price: '$110.00',
        }
      ],
    },
    {
      title: 'Top Rated',
      products: [
        {
          id: 1,
          img: 'https://rb.gy/62iqkl',
          title: 'Fatex Headphone',
          price: '$110.00',
        },
        {
          id: 2,
          img: 'https://rb.gy/62iqkl',
          title: 'Fatex Headphone',
          price: '$110.00',
        },
        {
          id: 3,
          img: 'https://rb.gy/62iqkl',
          title: 'Fatex Headphone',
          price: '$110.00',
        }
      ],
    },
    {
      title: 'Popular',
      products: [
        {
          id: 1,
          img: 'https://rb.gy/dyjv8b',
          title: 'Fatex Headphone',
          price: '$110.00',
        },
        {
          id: 2,
          img: 'https://rb.gy/dyjv8b',
          title: 'Fatex Headphone',
          price: '$110.00',
        },
        {
          id: 3,
          img: 'https://rb.gy/dyjv8b',
          title: 'Fatex Headphone',
          price: '$110.00',
        }
      ],
    },
    {
      title: 'Best Choice',
      products: [
        {
          id: 1,
          img: 'https://rb.gy/q56mpo',
          title: 'Fatex Headphone',
          price: '$110.00',
        },
        {
          id: 2,
          img: 'https://rb.gy/q56mpo',
          title: 'Fatex Headphone',
          price: '$110.00',
        },
        {
          id: 3,
          img: 'https://rb.gy/q56mpo',
          title: 'Fatex Headphone',
          price: '$110.00',
        }
      ],
    },
  ];
}
