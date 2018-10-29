import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  name: string;
  selectedAll: any;

  private _values1 = [
  { id: 5, val: 'All' },
    { id: 1, val: 'BreakFast Drink' },
    { id: 2, val: 'Regular Entree' },
    { id: 3, val: 'Breakfast Entree' },
    { id: 4, val: 'Breakfast Entree' }
  ];
  private _values2 = [];

  games = [
    {
      'id': '1',
      'name': 'Hamburger',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '2',
      'name': 'Cheese Burger',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '3',
      'name': 'Double Cheese Burger',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '4',
      'name': 'Big Mac',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '5',
      'name': 'Quarter Pounder with Cheese',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '6',
      'name': 'McRib',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '7',
      'name': 'S Coffee',
      'genre': 'BreakFast Drink',
      selected: false
    },
    {
      'id': '8',
      'name': 'Scrambled Eggs',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '9',
      'name': 'Hot Cakes',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '10',
      'name': 'Hot Cakes and Sausages',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '11',
      'name': 'Sausage Biscuit',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '12',
      'name': 'Chocolate brownie',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '13',
      'name': 'English Muffin',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '14',
      'name': 'Hashbrown',
      'genre': 'Breakfast Entree',
      selected: false
    },
    {
      'id': '15',
      'name': 'Bacon Cheese Burger',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '16',
      'name': 'Double Bacon Cheese Burger',
      'genre': 'Regular Entree',
      selected: false
    },
    {
      'id': '17',
      'name': 'Mc Flurry',
      'genre': 'BreakFast Drink',
      selected: false
    },
    {
      'id': '18',
      'name': 'Coke',
      'genre': 'BreakFast Drink',
      selected: false
    },
    {
      'id': '19',
      'name': 'Peri Peri',
      'genre': 'Regular Entree',
      selected: false
    }
  ];


  selectAll() {
    for (let i = 0; i < this.games.length; i++) {
      this.games[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.games.every(function(item: any) {
        return item.selected === true;
      });
  }

  searchbtn() {
    document.getElementById('tablediv').style.visibility = 'visible';
    document.getElementById('nextdiv').style.visibility = 'visible';
  }

 addbtn() {
    document.getElementById('selectDiv').style.visibility = 'visible';
  }



  contains_toggle() {

    document.getElementById('contains').classList.remove('btn-default');
    document.getElementById('contains').classList.add('btn-success');
    document.getElementById('exact').classList.remove('btn-success');
    document.getElementById('exact').classList.add('btn-default');
    }

    exact_toggle() {

    document.getElementById('exact').classList.remove('btn-default');
    document.getElementById('exact').classList.add('btn-success');
    document.getElementById('contains').classList.remove('btn-success');
    document.getElementById('contains').classList.add('btn-default');
    }

  // test() {

  //   const header = document.getElementById('myDIV');
  //   const btns = header.getElementsByClassName('btn btn-success');
  //   for (let i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener('click', function () {
  //       const current = document.getElementsByClassName('btn btn-success');
  //       current[0].className = current[0].className.replace('btn btn-success', '');
  //       this.className += 'btn btn-default';
  //     });
  //   }
  // }
  // test_c() {
  //   const header = document.getElementById('myDIV');
  //   const btns = header.getElementsByClassName('btn btn-default');
  //   for (let i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener('click', function () {
  //       const current = document.getElementsByClassName('btn btn-default');
  //       current[0].className = current[0].className.replace('btn btn-default', 'btn btn-success');
  //       this.className += 'btn btn-success';
  //     });
  //   }

  // }

  // sorting






 public filterByColumn:any;
 this.filterByColumn = {id:18};

}

