import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { PrimengDesignModule } from '../primeng-design/primeng-design.module';
import { RouterTestingModule } from '@angular/router/testing'
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginModile', () => {

  describe('Login Component', () => {

    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el:HTMLElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
          imports: [FormsModule, PrimengDesignModule, RouterTestingModule     ],
          declarations: [
              LoginComponent,
          ],
      }).compileComponents().then(()=>{
        fixture = TestBed.createComponent(LoginComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'))
        el = de.nativeElement;
      });
        
    });
  
    it('should set submitted to true', () =>{
      comp.onSubmit();
      expect(comp.submitted).toBeTruthy()
    });

    it('should call onSubmit method', async (()=>{
      fixture.detectChanges();
      spyOn(comp, 'onSubmit');
      el = fixture.debugElement.query(By.css('button')).nativeElement;
      el.click();
      expect(comp.onSubmit).toHaveBeenCalledTimes(1);
    }))

    it('form should be invalid', ()=>{
      comp.loginModel.username = "";
      comp.loginModel.password = "";
      fixture.detectChanges();
      spyOn(comp, 'onSubmit');
      el = fixture.debugElement.query(By.css('button')).nativeElement;
      el.click();
      console.log('comp.loginForm', comp.loginForm)
      expect(comp.loginForm.valid).toBeTruthy()
    })
    // function updateForm(username:string, userPassword:string) {
    //   component.loginForm.controls['username'].setValue(username);
    //   component.loginForm.controls['password'].setValue(userPassword);
    // }

    // it('should create the Login Component', () => {
    //   expect(component).toBeTruthy();
    // });

    // it('component initial state', () => {
    //   expect(component.loginForm).toBeDefined();
    //   expect(component.loginForm.valid).toBeTruthy();
    // });

    // it('component submit test', () => {
     
    //   const onClickMock = spyOn(component, 'onSubmit');
    //   component.loginModel.username ='sad';
    //   component.loginModel.password ='asd';
    //   fixture.detectChanges();
    //   component.onSubmit()
    //   expect(component.loginForm).toBeTruthy();
    //   expect(component.loginForm.value.username).toEqual('asd')
    // });

    // it('should call onSubmit method',() => {
    //   const onClickMock = spyOn(component, 'onSubmit');
    // fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    // expect(onClickMock).toHaveBeenCalled();
  });

    // it('test valid', () => {
    //   fixture = TestBed.createComponent(LoginComponent);
    //   component = fixture.componentInstance;
    //   fixture.detectChanges();
      
    //   fixture.whenStable().then( () => {
    //      component.loginForm.controls['username'].setValue('sandip');
    //      component.loginForm.controls['password'].setValue('sandip');
    //      console.log('va', component.loginForm.valid)
    //      component.onSubmit(component.loginModel);
    //      expect(component.loginForm.valid)
    //   })
    
    // });

   

})
 
