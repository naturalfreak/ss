import {Injectable} from '@angular/core';
import {CategoryModel} from '../models/categoryModel';
import {ItemModel} from '../models/itemModel';
import {CommentsModel} from '../models/commentsModel';
import {LikesModel} from '../models/likesModel';

@Injectable()
export class CategoryService {

  private categories:Array<any>;



  constructor() {
    this.categories = [
      new CategoryModel(1, 'Красота и стил', '/img/categories/beauty.png', 'blue1', [
        new CategoryModel(1, 'Фризьор', '/img/subCategories/beauty/hairstylist.png', 'blue1', [
          new ItemModel(1, 'Студио ШИК', '/img/subCategories/beauty/list/shik.png', '10 - 20 часа',
            '10 - 18 часа', 'почивен ден', 'София', 'бул. Александър Стамболийски 33',
          'Бла блаложножнонжншожнэонфношнжфонжфно ншжнишнфнш итшжтишжнши ижнишнж инпшоениж ', false, [
              new LikesModel(1, 'Ивета Македонска1',  '/img/subCategories/beauty/list/shik.png'),
              new LikesModel(2, 'Ивета Македонска2',  '/img/subCategories/beauty/list/shik.png'),
              new LikesModel(3, 'Ивета Македонска3',  '/img/subCategories/beauty/list/shik.png')
            ], [
              new CommentsModel(1, 'Ивета Македонска',  'Студиото е великолепно!',
                '/img/subCategories/beauty/list/shik.png', 'преди 10 часа'),
              new CommentsModel(2, 'Ивета Македонска',  'Студиото е великолепно2!',
                '/img/subCategories/beauty/list/shik.png', 'вчера в 19:32'),
              new CommentsModel(3, 'Ивета Македонска',  'Студиото е великолепно3!',
              '/img/subCategories/beauty/list/shik.png', 'четвъртък в 17:02')
            ]
          ),
          new ItemModel(2, 'Студио', '/img/subCategories/beauty/list/shik.png', '10 - 20 часа',
            '10 - 18 часа', 'почивен ден', 'София', 'бул. Петкан Стамболийски 33',
            'Бла блаложножнонжншожнэонфношнжфонжфно ншжнишнфнш итшжтишжнши ижнишнж инпшоениж ', true, [
              new LikesModel(1, 'Ивета Македонска1',  '/img/subCategories/beauty/list/shik.png'),
              new LikesModel(2, 'Ивета Македонска2',  '/img/subCategories/beauty/list/shik.png'),
              new LikesModel(3, 'Ивета Македонска3',  '/img/subCategories/beauty/list/shik.png')
              ], [
              new CommentsModel(1, 'Ивета Македонска',  'Студиото е великолепно!',
                '/img/subCategories/beauty/list/shik.png', 'преди 10 часа'),
              new CommentsModel(2, 'Ивета Македонска',  'Студиото е великолепно2!',
                '/img/subCategories/beauty/list/shik.png', 'вчера в 19:32'),
              new CommentsModel(3, 'Ивета Македонска',  'Студиото е великолепно3!',
                '/img/subCategories/beauty/list/shik.png', 'четвъртък в 17:02')
            ])
        ]),
        new CategoryModel(2, 'Козметик', '/img/subCategories/beauty/cosmetologist.png', 'blue2', null),
        new CategoryModel(3, 'Масажист', '/img/subCategories/beauty/massage.png', 'blue3', null),
        new CategoryModel(4, 'СПА', '/img/subCategories/beauty/spa.png', 'blue4', null),
        new CategoryModel(5, 'Маникюрист', '/img/subCategories/beauty/manicurist.png', 'blue1', null),
        new CategoryModel(6, 'Гримьор', '/img/subCategories/beauty/makeUp.png', 'blue2', null),
        new CategoryModel(7, 'Бръснар', '/img/subCategories/beauty/barber.png', 'blue3', null),
        new CategoryModel(8, 'Лазерна и фотоепилация', '/img/subCategories/beauty/hairRemoval.png', 'blue4', null),
        new CategoryModel(9, 'Пластичен хирург', '/img/subCategories/beauty/surgeon.png', 'blue1', null)
      ]),
      new CategoryModel(2, 'Забавление и спорт', '/img/categories/funSport.png', 'orange1', [
        new CategoryModel(1, 'Детски център', '/img/subCategories/fun/kidsCenter.png', 'orange1', null),
        new CategoryModel(2, 'Танцово студио', '/img/subCategories/fun/danceStudio.png', 'orange2', null),
        new CategoryModel(3, 'Студио за бойни изкуства', '/img/subCategories/fun/martial.png', 'orange3', null),
        new CategoryModel(4, 'Футбулно игрище', '/img/subCategories/fun/football.png', 'orange4', null),
        new CategoryModel(5, 'Фитнес', '/img/subCategories/fun/fitness.png', 'orange1', null),
        new CategoryModel(6, 'Боулинг', '/img/subCategories/fun/bowling.png', 'orange2', null),
        new CategoryModel(7, 'Кино', '/img/subCategories/fun/cinema.png', 'orange3', null),
        new CategoryModel(8, 'Театър', '/img/subCategories/fun/theater.png', 'orange4', null),
      ]),
      new CategoryModel(3, 'Здраве', '/img/categories/health.png', 'blue2', [
        new CategoryModel(1, 'Личен лекар', '/img/subCategories/health/gp.png', 'blue1', null),
        new CategoryModel(2, 'Очен лекар', '/img/subCategories/health/eyeDoctor.png', 'blue2', null),
        new CategoryModel(3, 'Зъболекар', '/img/subCategories/health/dentist.png', 'blue3', null),
        new CategoryModel(4, 'Уши, нос, гърло', '/img/subCategories/health/ear.png', 'blue4', null),
        new CategoryModel(5, 'Кардиолог', '/img/subCategories/health/cardiologist.png', 'blue1', null),
        new CategoryModel(2, 'Хирург', '/img/subCategories/health/surgeon.png', 'blue2', null)
      ]),
      new CategoryModel(4, 'Пътуване', '/img/categories/traveling.png', 'orange2', [
          new CategoryModel(1, 'Кола', '/img/subCategories/travel/car.png', 'orange1', null),
          new CategoryModel(2, 'Камион', '/img/subCategories/travel/truck.png', 'orange2', null),
          new CategoryModel(3, 'Автобус', '/img/subCategories/travel/autobus.png', 'orange3', null),
          new CategoryModel(4, 'Влак', '/img/subCategories/travel/train.png', 'orange4', null),
          new CategoryModel(5, 'Самолет', '/img/subCategories/travel/airplane.png', 'orange1', null),
          new CategoryModel(6, 'Кораб', '/img/subCategories/travel/ship.png', 'orange2', null),
          new CategoryModel(7, 'Туристическа агенция', '/img/subCategories/travel/travelingAgency.png', 'orange3', null)
      ]),
      new CategoryModel(5, 'Настаняване', '/img/categories/hotels.png', 'blue3', [
        new CategoryModel(1, 'Хотел', '/img/subCategories/staying/hotel.png', 'blue1', null),
        new CategoryModel(3, 'Хостел', '/img/subCategories/staying/hostel.png', 'blue2', null),
        new CategoryModel(4, 'Бунгала', '/img/subCategories/staying/bungalow.png', 'blue3', null),
        new CategoryModel(5, 'Квартира', '/img/subCategories/staying/apartment.png', 'blue4', null),
        new CategoryModel(2, 'Къща за гости', '/img/subCategories/staying/guestHouse.png', 'blue1', null)
      ]),
      new CategoryModel(6, 'Храни и напитки', '/img/categories/foodAndDrink.png', 'orange3', [
        new CategoryModel(1, 'Ресторант', '/img/subCategories/food/restaurant.png', 'orange1', null),
        new CategoryModel(2, 'Пицария', '/img/subCategories/food/pizza.png', 'orange2', null),
        new CategoryModel(3, 'Сладкарница', '/img/subCategories/food/cake.png', 'orange3', null),
        new CategoryModel(4, 'Бирария', '/img/subCategories/food/beer.png', 'orange4', null),
        new CategoryModel(5, 'Бар', '/img/subCategories/food/bar.png', 'orange1', null)
      ]),
      new CategoryModel(7, 'Строителство и подръжка', '/img/categories/repairment.png', 'blue4', [
        new CategoryModel(1, 'Строителство', '/img/subCategories/repairment/construction.png', 'blue1', null),
        new CategoryModel(3, 'Ремонт на техника', '/img/subCategories/repairment/technology.png', 'blue2', null),
        new CategoryModel(4, 'Автосервиз', '/img/subCategories/repairment/car.png', 'blue3', null),
        new CategoryModel(1, 'Жилищен ремонт', '/img/subCategories/repairment/homeRepariment.png', 'blue4', null),
        new CategoryModel(1, 'Автомивка', '/img/subCategories/repairment/car-wash.png', 'blue1', null)

      ]),
      new CategoryModel(8, 'Всичко останало', '/img/categories/other.png', 'orange4', [
        new CategoryModel(1, 'Брокерска къща', '/img/subCategories/all/house.png', 'orange1', null),
        new CategoryModel(2, 'Застрахователна агенция', '/img/subCategories/all/insurance.png', 'orange2', null),
        new CategoryModel(3, 'Фотостудио', '/img/subCategories/all/photo-camera.png', 'orange3', null),
        new CategoryModel(4, 'Шивашко ателие', '/img/subCategories/all/sewer.png', 'orange4', null),
        new CategoryModel(5, 'Химическо чистене', '/img/subCategories/all/chemical-washing.png', 'orange1', null),
        new CategoryModel(2, 'Пералня', '/img/subCategories/all/washing-machine.png', 'orange2', null),
        new CategoryModel(3, 'Ветеринарна клиника', '/img/subCategories/all/vet.png', 'orange3', null),

      ])
    ]
  }

  getCategories() {
    return this.categories;
  }

  findItems(place: string) {
    let found = [];
    this.categories.forEach( (main) => {
      if(main.sub) {
        main.sub.forEach( (sub) => {
          if(sub.sub) {
            sub.sub.forEach( (e) => {
              let s = e.name.toLowerCase();
              let a = e.address.toLowerCase();
              if(s.indexOf(place.toLowerCase()) > -1 || a.indexOf(place.toLowerCase()) > -1) {
                found.push(e);
              }
            })
          }
        })
      }
    })
    return found;
  }
}
