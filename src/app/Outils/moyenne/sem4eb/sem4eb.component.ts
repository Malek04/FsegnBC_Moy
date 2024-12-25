import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_EB4,Subject_Coef_EB4, Module_Credits_EB4,total} from 'src/app/Configuration/Configuration_Module_EB4';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem4eb',
  templateUrl: './sem4eb.component.html',
  styleUrls: ['./sem4eb.component.css']
})
export class Sem4ebComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //SGBD
      ds1sgbd: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2sgbd: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsgbd: ['', [Validators.required, rangeValidator(0, 20)]],
      moysgbd: [{ value: '', disabled: true }],
      creditsgbd: [{ value: '', disabled: true }],
      //Programmation web2	
      ds1web2: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2web2: ['', [Validators.required, rangeValidator(0, 20)]],
      tpweb2: ['', [Validators.required, rangeValidator(0, 20)]],
      moyweb2: [{ value: '', disabled: true }],
      creditweb2: [{ value: '', disabled: true }],
      //conception TB et scoring
      exscoring: ['', [Validators.required, rangeValidator(0, 20)]],
      tpscoring: ['', [Validators.required, rangeValidator(0, 20)]],
      oralscoring: ['', [Validators.required, rangeValidator(0, 20)]],
      moyscoring: [{ value: '', disabled: true }],
      creditscoring: [{ value: '', disabled: true }],
      //recherche opérationnelle
      exro: ['', [Validators.required, rangeValidator(0, 20)]],
      tpro: ['', [Validators.required, rangeValidator(0, 20)]],
      oralro: ['', [Validators.required, rangeValidator(0, 20)]],
      moyro: [{ value: '', disabled: true }],
      creditro: [{ value: '', disabled: true }],
      //IT management
      exitmanagement: ['', [Validators.required, rangeValidator(0, 20)]],
      tpitmanagement: ['', [Validators.required, rangeValidator(0, 20)]],
      oraitmanagement: ['', [Validators.required, rangeValidator(0, 20)]],
      moyitmanagement: [{ value: '', disabled: true }],
      crediitmanagement: [{ value: '', disabled: true }],
      //génie logiciel et outils d'AGL
      exagl: ['', [Validators.required, rangeValidator(0, 20)]],
      tpagl: ['', [Validators.required, rangeValidator(0, 20)]],
      oralagl:['', [Validators.required, rangeValidator(0, 20)]],
      moyagl: [{ value: '', disabled: true }],
      creditagl: [{ value: '', disabled: true }],
      //Data warehouse
      exdatawarehouse: ['', [Validators.required, rangeValidator(0, 20)]],
      tpdatawarehouse: ['', [Validators.required, rangeValidator(0, 20)]],
      oraldatawarehouse: ['', [Validators.required, rangeValidator(0, 20)]],
      moydatawarehouse: [{ value: '', disabled: true }],
      creditdatawarehouse: [{ value: '', disabled: true }],
      //E-customer relationship management
      excrm: ['', [Validators.required, rangeValidator(0, 20)]],
      tpcrm: ['', [Validators.required, rangeValidator(0, 20)]],
      oralcrm: ['', [Validators.required, rangeValidator(0, 20)]],
      moycrm: [{ value: '', disabled: true }],
      creditcrm: [{ value: '', disabled: true }],
      //problem solving
      ds1psolving: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2psolving: ['', [Validators.required, rangeValidator(0, 20)]],
      tppsolving: ['', [Validators.required, rangeValidator(0, 20)]],
      moypsolving: [{ value: '', disabled: true }],
      creditpsolving: [{ value: '', disabled: true }],
      //Business Communication
      ds1bc: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2bc: ['', [Validators.required, rangeValidator(0, 20)]],
      tpbc: ['', [Validators.required, rangeValidator(0, 20)]],
      moybc: [{ value: '', disabled: true }],
      creditbc: [{ value: '', disabled: true }],
      //Entreprenariat 
      ds1entrepreneuriat: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2entrepreneuriat: ['', [Validators.required, rangeValidator(0, 20)]],
      tpentrepreneuriat: ['', [Validators.required, rangeValidator(0, 20)]],
      moyentrepreneuriat: [{ value: '', disabled: true }],
      creditentrepreneuriat: [{ value: '', disabled: true }],
      //Sécuirité Informatique
      ds1securite: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2securite: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsecurite: ['', [Validators.required, rangeValidator(0, 20)]],
      moysecurite: [{ value: '', disabled: true }],
      creditsecurite: [{ value: '', disabled: true }],
      //poo2
      ds1poo: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2poo: ['', [Validators.required, rangeValidator(0, 20)]],
      tppoo: ['', [Validators.required, rangeValidator(0, 20)]],
      moypoo: [{ value: '', disabled: true }],
      creditpoo: [{ value: '', disabled: true }],
      //moyenne generale et credit
      moy: [{ value: '', disabled: true }],
      credit: [{ value: '', disabled: true }],
      //moyenne et credit par module
      //SGBD et programmation
      moysgbdetweb: [{ value: '', disabled: true }],
      creditsgbdetweb: [{ value: '', disabled: true }],
      //Tableau de bord et RO
      moytbetro: [{ value: '', disabled: true }],
      credittbetro: [{ value: '', disabled: true }],
      //Systémes d'information
      moysysinfo: [{ value: '', disabled: true }],
      creditsysinfo: [{ value: '', disabled: true }],
      //Data warehouse et CRM
      moydatawarehouseetcrm: [{ value: '', disabled: true }],
      creditdatawarehouseetcrm: [{ value: '', disabled: true }],
      //Soft Skills et culture 4
      moysoftskills4: [{ value: '', disabled: true }],
      creditsoftskills4: [{ value: '', disabled: true }],
      //UEOP4
      moyUEOP4: [{ value: '', disabled: true }],
      creditUEOP4: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('ds1sgbd', 'ds2sgbd', 'tpsgbd', 'moysgbd', 'creditsgbd', 0.4, 0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('ds1web2', 'ds2web2', 'tpweb2', 'moyweb2', 'creditweb2', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('exscoring', 'tpscoring', 'oralscoring', 'moyscoring', 'creditscoring', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exro', 'tpro', 'oralro', 'moyro', 'creditro', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exitmanagement', 'tpitmanagement', 'oraitmanagement', 'moyitmanagement', 'crediitmanagement', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exagl', 'tpagl', 'oralagl', 'moyagl', 'creditagl', 0.7,0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('exdatawarehouse', 'tpdatawarehouse', 'oraldatawarehouse', 'moydatawarehouse', 'creditdatawarehouse', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('excrm', 'tpcrm', 'oralcrm', 'moycrm', 'creditcrm', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1psolving', 'ds2psolving', 'tppsolving', 'moypsolving', 'creditpsolving', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1bc', 'ds2bc', 'tpbc', 'moybc', 'creditbc', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1entrepreneuriat', 'ds2entrepreneuriat', 'tpentrepreneuriat', 'moyentrepreneuriat', 'creditentrepreneuriat', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1securite', 'ds2securite', 'tpsecurite', 'moysecurite', 'creditsecurite', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1poo', 'ds2poo', 'tppoo', 'moypoo', 'creditpoo', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_EB4);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_EB4, total, Module_Credits_EB4);
    });
  }
}