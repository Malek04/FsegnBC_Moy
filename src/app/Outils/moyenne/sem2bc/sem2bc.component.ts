import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_BC2,Subject_Coef_BC2, Module_Credits_BC2,total} from 'src/app/Configuration/Configuration_Module_BC2';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem3bc',
  templateUrl: './sem2bc.component.html',
  styleUrls: ['./sem2bc.component.css']
})
export class Sem2bcComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //technique de communication 2
      tdc2ds1: ['', [Validators.required, rangeValidator(0, 20)]],
      tdc2ds2: ['', [Validators.required, rangeValidator(0, 20)]],
      tdc2tp: ['', [Validators.required, rangeValidator(0, 20)]],
      tdc2moy: [{ value: '', disabled: true }],
      tdc2credit: [{ value: '', disabled: true }],
      //business communication 2
      bc2ds1: ['', [Validators.required, rangeValidator(0, 20)]],
      bc2ds2: ['', [Validators.required, rangeValidator(0, 20)]],
      bc2tp: ['', [Validators.required, rangeValidator(0, 20)]],
      bc2moy: [{ value: '', disabled: true }],
      bc2credit: [{ value: '', disabled: true }],
      //algorithmique 2
      algo2ex: ['', [Validators.required, rangeValidator(0, 20)]],
      algo2tp: ['', [Validators.required, rangeValidator(0, 20)]],
      algo2oral: ['', [Validators.required, rangeValidator(0, 20)]],
      moyalgo2: [{ value: '', disabled: true }],
      creditalgo2: [{ value: '', disabled: true }],
      //introduction aux systémes d'information
      exsystemedinformation: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsystemedinformation: ['', [Validators.required, rangeValidator(0, 20)]],
      oralsystemedinformation: ['', [Validators.required, rangeValidator(0, 20)]],
      moysystemedinformation: [{ value: '', disabled: true }],
      creditsystemedinformation: [{ value: '', disabled: true }],
      //fondements des réseaux
      exreseau: ['', [Validators.required, rangeValidator(0, 20)]],
      tpreseau: ['', [Validators.required, rangeValidator(0, 20)]],
      oralreseau: ['', [Validators.required, rangeValidator(0, 20)]],
      moyreseau: [{ value: '', disabled: true }],
      creditreseau: [{ value: '', disabled: true }],
      //algebre
      exalgebre: ['', [Validators.required, rangeValidator(0, 20)]],
      tpalgebre: ['', [Validators.required, rangeValidator(0, 20)]],
      oralalgebre:['', [Validators.required, rangeValidator(0, 20)]],
      moyalgebre: [{ value: '', disabled: true }],
      creditalgebre: [{ value: '', disabled: true }],
      //logique mathematique
      exlogiquemath: ['', [Validators.required, rangeValidator(0, 20)]],
      tplogiquemath: ['', [Validators.required, rangeValidator(0, 20)]],
      orallogiquemath: ['', [Validators.required, rangeValidator(0, 20)]],
      moylogiquemath: [{ value: '', disabled: true }],
      creditlogiquemath: [{ value: '', disabled: true }],
      //le systéme d'information comptable
      exsic: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsic: ['', [Validators.required, rangeValidator(0, 20)]],
      oralsic: ['', [Validators.required, rangeValidator(0, 20)]],
      moysic: [{ value: '', disabled: true }],
      creditsic: [{ value: '', disabled: true }],
      //gestion financiére	
      exgf: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgf: ['', [Validators.required, rangeValidator(0, 20)]],
      oralgf: ['', [Validators.required, rangeValidator(0, 20)]],
      moygf: [{ value: '', disabled: true }],
      creditgf: [{ value: '', disabled: true }],
      //Système d'exploitation 2	
      os2ds1: ['', [Validators.required, rangeValidator(0, 20)]],
      os2ds2: ['', [Validators.required, rangeValidator(0, 20)]],
      os2tp: ['', [Validators.required, rangeValidator(0, 20)]],
      moyos2: [{ value: '', disabled: true }],
      creditos2: [{ value: '', disabled: true }],
      //Introduction base des données	
      bdds1: ['', [Validators.required, rangeValidator(0, 20)]],
      bdds2: ['', [Validators.required, rangeValidator(0, 20)]],
      bdtp: ['', [Validators.required, rangeValidator(0, 20)]],
      bdmoy: [{ value: '', disabled: true }],
      creditbd: [{ value: '', disabled: true }],
      //moyenne generale et credit
      moy: [{ value: '', disabled: true }],
      credit: [{ value: '', disabled: true }],
      //moyenne et credit par module
      //soft skills2
      moysoftskills2: [{ value: '', disabled: true }],
      creditsoftskills2: [{ value: '', disabled: true }],
      //algo2
      algo2moy: [{ value: '', disabled: true }],
      algo2credit: [{ value: '', disabled: true }],
      //systeme2
      moysysteme2: [{ value: '', disabled: true }],
      creditsysteme2: [{ value: '', disabled: true }],
      //math2
      moymath2: [{ value: '', disabled: true }],
      creditmath2: [{ value: '', disabled: true }],
      //gestion2
      moygestion2: [{ value: '', disabled: true }],
      creditgestion2: [{ value: '', disabled: true }],
      //UEOP2
      moyUEOP2: [{ value: '', disabled: true }],
      creditUEOP2: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('tdc2ds1', 'tdc2ds2', 'tdc2tp', 'tdc2moy', 'tdc2credit', 0.4, 0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('bc2ds1', 'bc2ds2', 'bc2tp', 'bc2moy', 'bc2credit', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateCalculatedValues('algo2ex', 'algo2tp', 'algo2oral', 'algo2moy', 'algo2credit', 0.7,0.2, 0.1, 6, this.moyenneform);
      updateCalculatedValues('exsystemedinformation', 'tpsystemedinformation', 'oralsystemedinformation', 'moysystemedinformation', 'creditsystemedinformation', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exreseau', 'tpreseau', 'oralreseau', 'moyreseau', 'creditreseau', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exalgebre', 'tpalgebre', 'oralalgebre', 'moyalgebre', 'creditalgebre', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exlogiquemath', 'tplogiquemath', 'orallogiquemath', 'moylogiquemath', 'creditlogiquemath', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exsic', 'tpsic', 'oralsic', 'moysic', 'creditsic', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exgf', 'tpgf', 'oralgf', 'moygf', 'creditgf', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('os2ds1', 'os2ds2', 'os2tp', 'moyos2', 'creditos2', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateCalculatedValues('bdds1', 'bdds2', 'bdtp', 'bdmoy', 'creditbd', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_BC2);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_BC2, total, Module_Credits_BC2);
    });
  }
}
