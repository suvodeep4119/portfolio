import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutComponent, SkillsComponent, ProjectsComponent, BlogsComponent, ContactComponent, FooterComponent],
  imports: [BrowserModule, NgxTypedJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
