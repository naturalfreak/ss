import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Comments } from '../pages/comments/comments';
import { Filter } from '../pages/filter/filter';
import { Items } from '../pages/items/items';
import { Likes } from '../pages/likes/likes';
import { List } from '../pages/list/list';
import { MakeAppointment } from '../pages/makeAppointment/makeAppointment';
import { MessageDetails } from '../pages/message-details/message-details';
import { Search } from '../pages/search/search';
import { SubCategory }  from '../pages/subCategory/subCategory';

//Services
import { CategoryService } from '../services/categoryService'
import { MessagesService } from '../services/messagesService'
import { SettingsService } from '../services/settingsService'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Comments,
    TabsPage,
    Items,
    Filter,
    Likes,
    List,
    MakeAppointment,
    MessageDetails,
    Search,
    SubCategory
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Comments,
    TabsPage,
    Filter,
    Items,
    Likes,
    List,
    MakeAppointment,
    MessageDetails,
    Search,
    SubCategory
  ],
  providers: [
    CategoryService,
    MessagesService,
    SettingsService
  ]
})
export class AppModule {}
