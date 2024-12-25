import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_BI5,Subject_Coef_BI5, Module_Credits_BI5,total} from 'src/app/Configuration/Configuration_Module_BI5';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem5bi',
  templateUrl: './sem5bi.component.html',
  styleUrls: ['./sem5bi.component.css']
})
export class Sem5biComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //Introduction au Big data et Cloud	
      exbigdata: ['', [Validators.required, rangeValidator(0, 20)]],
      tpbigdata: ['', [Validators.required, rangeValidator(0, 20)]],
      oralbigdata: ['', [Validators.required, rangeValidator(0, 20)]],
      moybigdata: [{ value: '', disabled: true }],
      creditbigdata: [{ value: '', disabled: true }],
      //Développement Mobile	
      ds1devmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2devmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      tpdevmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      moydevmobile: [{ value: '', disabled: true }],
      creditdevmobile: [{ value: '', disabled: true }],
      //Les fondamentaux de la sécurité IT		
      ds1securite: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2securite: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsecurite: ['', [Validators.required, rangeValidator(0, 20)]],
      moysecurite: [{ value: '', disabled: true }],
      creditsecurite: [{ value: '', disabled: true }],
      //Gestion de la technologie de l'information
      ds1techit: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2techit: ['', [Validators.required, rangeValidator(0, 20)]],
      tptechit: ['', [Validators.required, rangeValidator(0, 20)]],
      moytechit: [{ value: '', disabled: true }],
      credittechit: [{ value: '', disabled: true }],
      //Langages de programmation évolués -BI
      expython: ['', [Validators.required, rangeValidator(0, 20)]],
      tppython: ['', [Validators.required, rangeValidator(0, 20)]],
      oralpython: ['', [Validators.required, rangeValidator(0, 20)]],
      moypython: [{ value: '', disabled: true }],
      creditpython: [{ value: '', disabled: true }],
      //Conception TB et scoring	
      ds1powerbi: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2powerbi: ['', [Validators.required, rangeValidator(0, 20)]],
      tppowerbi:['', [Validators.required, rangeValidator(0, 20)]],
      moypowerbi: [{ value: '', disabled: true }],
      creditpowerbi: [{ value: '', disabled: true }],
      //Techniques de prévision	
      exprevision: ['', [Validators.required, rangeValidator(0, 20)]],
      tpprevision: ['', [Validators.required, rangeValidator(0, 20)]],
      oralprevision: ['', [Validators.required, rangeValidator(0, 20)]],
      moyprevision: [{ value: '', disabled: true }],
      creditprevision: [{ value: '', disabled: true }],
      //Fondements de la théorie de décision
      exdecision: ['', [Validators.required, rangeValidator(0, 20)]],
      tpdecision: ['', [Validators.required, rangeValidator(0, 20)]],
      oraldecision: ['', [Validators.required, rangeValidator(0, 20)]],
      moydecision: [{ value: '', disabled: true }],
      creditdecision: [{ value: '', disabled: true }],
      //Gestion de projet	
      ds1gstionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2gstionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgestionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      moygestionprojet: [{ value: '', disabled: true }],
      creditgestionprojet: [{ value: '', disabled: true }],
      //Psychology and sociology for online media applications
      ds1loi: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2loi: ['', [Validators.required, rangeValidator(0, 20)]],
      tploi: ['', [Validators.required, rangeValidator(0, 20)]],
      moyloi: [{ value: '', disabled: true }],
      creditloi: [{ value: '', disabled: true }],
      //Architecture orientée services	 
      ds1aos: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2aos: ['', [Validators.required, rangeValidator(0, 20)]],
      tpaos: ['', [Validators.required, rangeValidator(0, 20)]],
      moyaos: [{ value: '', disabled: true }],
      creditaos: [{ value: '', disabled: true }],
      //Introduction to machine learning
      ds1ML: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2ML: ['', [Validators.required, rangeValidator(0, 20)]],
      tpML: ['', [Validators.required, rangeValidator(0, 20)]],
      moyML: [{ value: '', disabled: true }],
      creditML: [{ value: '', disabled: true }],
      //moyenne generale et credit
      moy: [{ value: '', disabled: true }],
      credit: [{ value: '', disabled: true }],
      //moyenne et credit par module
      //Environnements évolués	
      moyenvironement: [{ value: '', disabled: true }],
      creditonvironement: [{ value: '', disabled: true }],
      //Technologies de l'information
      moytechinfo: [{ value: '', disabled: true }],
      credittechinfo: [{ value: '', disabled: true }],
      //Analyse des données et Programmation avancée 2
      moyanalyseavance: [{ value: '', disabled: true }],
      creditanalyseavance: [{ value: '', disabled: true }],
      //Sciences de la décision	
      moysciencedecision: [{ value: '', disabled: true }],
      creditsciencedecision: [{ value: '', disabled: true }],
      //Soft Skills et culture 5
      moysoftskills5: [{ value: '', disabled: true }],
      creditsoftskills5: [{ value: '', disabled: true }],
      //UEOP5
      moyUEOP5: [{ value: '', disabled: true }],
      creditUEOP5: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('exbigdata', 'tpbigdata', 'oralbigdata', 'moybigdata', 'creditbigdata', 0.7, 0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('ds1devmobile', 'ds2devmobile', 'tpdevmobile', 'moydevmobile', 'creditdevmobile', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1securite', 'ds2securite', 'tpsecurite', 'moysecurite', 'creditsecurite', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1techit', 'ds2techit', 'tptechit', 'moytechit', 'credittechit', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('expython', 'tppython', 'oralpython', 'moypython', 'creditpython', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1powerbi', 'ds2powerbi', 'tppowerbi', 'moypowerbi', 'creditpowerbi', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('exprevision', 'tpprevision', 'oralprevision', 'moyprevision', 'creditprevision', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exdecision', 'tpdecision', 'oraldecision', 'moydecision', 'creditdecision', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1gstionprojet', 'ds2gstionprojet', 'tpgestionprojet', 'moygestionprojet', 'creditgestionprojet', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateCalculatedValues('ds1loi', 'ds2loi', 'tploi', 'moyloi', 'creditloi', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1aos', 'ds2aos', 'tpaos', 'moyaos', 'creditaos', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateCalculatedValues('ds1ML', 'ds2ML', 'tpML', 'moyML', 'creditML', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_BI5);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_BI5, total, Module_Credits_BI5);
    });
  }
}