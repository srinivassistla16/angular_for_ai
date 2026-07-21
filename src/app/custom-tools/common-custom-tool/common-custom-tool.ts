import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomToolsService } from '../../services/custom-tools-service';
import { MultiplyModel } from '../../models/multiply_input_model';

@Component({
  selector: 'app-common-custom-tool',
  standalone: false,
  templateUrl: './common-custom-tool.html',
  styleUrl: './common-custom-tool.css',
})
export class CommonCustomTool {

   constructor(private route: ActivatedRoute, private customToolsService : CustomToolsService) { }

   modeOfTool: string | null = "";

  ngOnInit() {
    // this.modelName = this.route.snapshot.paramMap.get('modelname');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.modeOfTool = params.get('modeOfTool')
    });
  }
  fb = inject(FormBuilder)

    multiplyInputForm = this.fb.group(
    {
      num1: [0 , [Validators.required,Validators.min(1)]],
      num2: [0, [Validators.required,Validators.min(1)]],
    });

    multiplyResponseForm = this.fb.group(
    {
      answer: ['', []],
      toolname: ['', []],
      tooldesc: ['', []],
      toolargs: ['', []],
      });


      multiplyResponse$: Observable<any> | undefined = of("temp");
      doMultiply() {
      let num1 =   this.multiplyInputForm?.controls?.num1?.value;
      let num2 =   this.multiplyInputForm?.controls?.num2?.value;
      if (!num1) {
        num1 = 0
      }
      if (!num2) {
        num2 = 0
      }
      this.multiplyResponse$ = this.customToolsService.getCustomToolMultiplyResponse(this.modeOfTool, new MultiplyModel(num1, num2));
    
        this.multiplyResponse$?.subscribe({
          next: (data: any) => {
            if (data?.model_response != '') {
              this.multiplyResponseForm.controls.answer.setValue(data?.model_response);
              this.multiplyResponseForm.controls.toolname.setValue(data?.toolname);
              this.multiplyResponseForm.controls.tooldesc.setValue(data?.tooldesc);
              this.multiplyResponseForm.controls.toolargs.setValue(data?.toolargs);
            }
            // Handle success (e.g., show a success message)
          },
          error: (error: any) => {
            console.error('Technical Issue. Please Contact Support Engineer!!', error);
            // Handle error
          },
          complete: () => {
            // Handle the completion event (optional)
            console.log('Observable completed');
          }
        });
      }

}
