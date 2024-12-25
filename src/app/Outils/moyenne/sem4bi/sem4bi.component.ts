import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_BI4,Subject_Coef_BI4, Module_Credits_BI4,total} from 'src/app/Configuration/Configuration_Module_BI4';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem4bi',
  templateUrl: './sem4bi.component.html',
  styleUrls: ['./sem4bi.component.css']
})
export class Sem4biComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //data mining
      exdatamining: ['', [Validators.required, rangeValidator(0, 20)]],
      tpdatamining: ['', [Validators.required, rangeValidator(0, 20)]],
      oraldatamining: ['', [Validators.required, rangeValidator(0, 20)]],
      moydatamining: [{ value: '', disabled: true }],
      creditdatamining: [{ value: '', disabled: true }],
      //programmation web2
      ds1web2: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2web2: ['', [Validators.required, rangeValidator(0, 20)]],
      tpweb2: ['', [Validators.required, rangeValidator(0, 20)]],
      moyweb2: [{ value: '', disabled: true }],
      creditweb2: [{ value: '', disabled: true }],
      //theorie de graph
      exgraph: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgraph: ['', [Validators.required, rangeValidator(0, 20)]],
      oralgraph: ['', [Validators.required, rangeValidator(0, 20)]],
      moygraph: [{ value: '', disabled: true }],
      creditgraph: [{ value: '', disabled: true }],
      //genie logiciel
      ds1genielogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2genielogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgenielogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      moygenielogiciel: [{ value: '', disabled: true }],
      creditgenielogiciel: [{ value: '', disabled: true }],
      //architecture logicielle
      exarchilogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      tparchilogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      oralarchilogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      moyarchilogiciel: [{ value: '', disabled: true }],
      creditarchilogiciel: [{ value: '', disabled: true }],
      //SGBD
      exsgbd: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsgbd: ['', [Validators.required, rangeValidator(0, 20)]],
      oralsgbd:['', [Validators.required, rangeValidator(0, 20)]],
      moysgbd: [{ value: '', disabled: true }],
      creditsgbd: [{ value: '', disabled: true }],
      //Data Warehouse
      exdatawarehouse: ['', [Validators.required, rangeValidator(0, 20)]],
      tpdatawarehouse: ['', [Validators.required, rangeValidator(0, 20)]],
      oraldatawarehouse: ['', [Validators.required, rangeValidator(0, 20)]],
      moydatawarehouse: [{ value: '', disabled: true }],
      creditdatawarehouse: [{ value: '', disabled: true }],
      //entrepreneuriat
      ds1entrepreneuriat: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2entrepreneuriat: ['', [Validators.required, rangeValidator(0, 20)]],
      tpentrepreneuriat: ['', [Validators.required, rangeValidator(0, 20)]],
      moyentrepreneuriat: [{ value: '', disabled: true }],
      creditentrepreneuriat: [{ value: '', disabled: true }],
      //leadership
      ds1leadership: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2leadership: ['', [Validators.required, rangeValidator(0, 20)]],
      tpleadership: ['', [Validators.required, rangeValidator(0, 20)]],
      moyleadership: [{ value: '', disabled: true }],
      creditleadership: [{ value: '', disabled: true }],
      //problem solving
      ds1psolving: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2psolving: ['', [Validators.required, rangeValidator(0, 20)]],
      tppsolving: ['', [Validators.required, rangeValidator(0, 20)]],
      moypsolving: [{ value: '', disabled: true }],
      creditpsolving: [{ value: '', disabled: true }],
      //poo2
      expoo: ['', [Validators.required, rangeValidator(0, 20)]],
      tppoo: ['', [Validators.required, rangeValidator(0, 20)]],
      oralpoo: ['', [Validators.required, rangeValidator(0, 20)]],
      moypoo: [{ value: '', disabled: true }],
      creditpoo: [{ value: '', disabled: true }],
      //siad
      exsiad: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsiad: ['', [Validators.required, rangeValidator(0, 20)]],
      oralsiad: ['', [Validators.required, rangeValidator(0, 20)]],
      moysiad: [{ value: '', disabled: true }],
      creditsiad: [{ value: '', disabled: true }],
      //moyenne generale et credit
      moy: [{ value: '', disabled: true }],
      credit: [{ value: '', disabled: true }],
      //moyenne et credit par module
      //analyse des données et programmation avancées 1
      moyaddpa1: [{ value: '', disabled: true }],
      creditaddpa1: [{ value: '', disabled: true }],
      //theorie de graph et recherche opérationnelle
      moymgraph: [{ value: '', disabled: true }],
      creditmgraph: [{ value: '', disabled: true }],
      //Ingéniérie des logiciels	
      moyinglogiciel: [{ value: '', disabled: true }],
      creditinglogiciel: [{ value: '', disabled: true }],
      //Base de données	
      moydb: [{ value: '', disabled: true }],
      creditdb: [{ value: '', disabled: true }],
      //Soft Skills et culture 4
      moysoftskills4: [{ value: '', disabled: true }],
      creditsoftskills4: [{ value: '', disabled: true }],
      //UEOP4
      moyUEOP4: [{ value: '', disabled: true }],
      creditUEOP4: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('exdatamining', 'tpdatamining', 'oraldatamining', 'moydatamining', 'creditdatamining', 0.7, 0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1web2', 'ds2web2', 'tpweb2', 'moyweb2', 'creditweb2', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('exgraph', 'tpgraph', 'oralgraph', 'moygraph', 'creditgraph', 0.7,0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('ds1genielogiciel', 'ds2genielogiciel', 'tpgenielogiciel', 'moygenielogiciel', 'creditgenielogiciel', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('exarchilogiciel', 'tparchilogiciel', 'oralarchilogiciel', 'moyarchilogiciel', 'creditarchilogiciel', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exsgbd', 'tpsgbd', 'oralsgbd', 'moysgbd', 'creditsgbd', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exdatawarehouse', 'tpdatawarehouse', 'oraldatawarehouse', 'moydatawarehouse', 'creditdatawarehouse', 0.7,0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('ds1entrepreneuriat', 'ds2entrepreneuriat', 'tpentrepreneuriat', 'moyentrepreneuriat', 'creditentrepreneuriat', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1leadership', 'ds2leadership', 'tpleadership', 'moyleadership', 'creditleadership', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1psolving', 'ds2psolving', 'tppsolving', 'moypsolving', 'creditpsolving', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('expoo', 'tppoo', 'oralpoo', 'moypoo', 'creditpoo', 0.7,0.2, 0.1, 4, this.moyenneform);
      updateCalculatedValues('exsiad', 'tpsiad', 'oralsiad', 'moysiad', 'creditsiad', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_BI4);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_BI4, total, Module_Credits_BI4);
    });
  }
}