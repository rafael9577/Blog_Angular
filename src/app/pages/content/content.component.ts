import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { fakeNews } from '../../../data/data';

@Component({
   selector: 'app-content',
   imports: [RouterModule],
   templateUrl: './content.component.html',
   styleUrl: './content.component.css'
})
export class ContentComponent {
   photoCover: string = '';
   contentTitle: string = '';
   contentDescription: string = '';
   private id: string | null = '';

   constructor(private router: ActivatedRoute) {

   }

   ngOnInit(): void {
      this.router.paramMap.subscribe(value => {
         this.id = (value.get('id'));
      })
      this.setValuesToComponent(this.id);
   }
   setValuesToComponent(id: string| null) {
      const result = fakeNews.filter((item) => item.id === id)[0];
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.imageURL;

      console.log(result);

   }
}
