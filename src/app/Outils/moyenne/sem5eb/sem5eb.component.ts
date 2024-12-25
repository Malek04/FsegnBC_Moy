import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_EB5,Subject_Coef_EB5, Module_Credits_EB5,total} from 'src/app/Configuration/Configuration_Module_EB5';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem5eb',
  templateUrl: './sem5eb.component.html',
  styleUrls: ['./sem5eb.component.css']
})
export class Sem5ebComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //Développement Mobile
      exdevmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      tpdevmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      oraldevmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      moydevmobile: [{ value: '', disabled: true }],
      creditdevmobile: [{ value: '', disabled: true }],
      //Intègration Web
      exweb: ['', [Validators.required, rangeValidator(0, 20)]],
      tpweb: ['', [Validators.required, rangeValidator(0, 20)]],
      oralweb: ['', [Validators.required, rangeValidator(0, 20)]],
      moyweb: [{ value: '', disabled: true }],
      creditweb: [{ value: '', disabled: true }],
      //Intelligence Artificielle
      exAI: ['', [Validators.required, rangeValidator(0, 20)]],
      tpAI: ['', [Validators.required, rangeValidator(0, 20)]],
      oralAI: ['', [Validators.required, rangeValidator(0, 20)]],
      moyAI: [{ value: '', disabled: true }],
      creditAI: [{ value: '', disabled: true }],
      //Analyse Données Data Mining
      exdatamining: ['', [Validators.required, rangeValidator(0, 20)]],
      tpdatamining: ['', [Validators.required, rangeValidator(0, 20)]],
      oraldatamining: ['', [Validators.required, rangeValidator(0, 20)]],
      moydatamining: [{ value: '', disabled: true }],
      creditdatamining: [{ value: '', disabled: true }],
      //Gestion de projet
      exgestionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgestionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      oralgestionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      moygestionprojet: [{ value: '', disabled: true }],
      creditgestionprojet: [{ value: '', disabled: true }],
      //IT Sécurity Fondamentals
      exsecurity: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsecurituy: ['', [Validators.required, rangeValidator(0, 20)]],
      oralsecurity:['', [Validators.required, rangeValidator(0, 20)]],
      moysecurity: [{ value: '', disabled: true }],
      creditsecurity: [{ value: '', disabled: true }],
      //Langages de programmation évolués -BI
      ds1python: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2pyhton: ['', [Validators.required, rangeValidator(0, 20)]],
      tppython: ['', [Validators.required, rangeValidator(0, 20)]],
      moypython: [{ value: '', disabled: true }],
      creditpython: [{ value: '', disabled: true }],
      //Introduction au big Data
      exbigdata: ['', [Validators.required, rangeValidator(0, 20)]],
      tpbigdata: ['', [Validators.required, rangeValidator(0, 20)]],
      oralbigdata: ['', [Validators.required, rangeValidator(0, 20)]],
      moybigdata: [{ value: '', disabled: true }],
      creditbigdata: [{ value: '', disabled: true }],
      //business communication (en anglais)
      ds1bc: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2bc: ['', [Validators.required, rangeValidator(0, 20)]],
      tpbc: ['', [Validators.required, rangeValidator(0, 20)]],
      moybc: [{ value: '', disabled: true }],
      creditbc: [{ value: '', disabled: true }],
      //Laws and Ethics of IT
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
      //Paiement Electroniques
      ds1pe: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2pe: ['', [Validators.required, rangeValidator(0, 20)]],
      tppe: ['', [Validators.required, rangeValidator(0, 20)]],
      moype: [{ value: '', disabled: true }],
      creditpe: [{ value: '', disabled: true }],
      //moyenne generale et credit
      moy: [{ value: '', disabled: true }],
      credit: [{ value: '', disabled: true }],
      //moyenne et credit par module
      //Web development mobile
      moydev: [{ value: '', disabled: true }],
      creditdev: [{ value: '', disabled: true }],
      //Informatique decisionnellle
      moyinfodecisionnelle: [{ value: '', disabled: true }],
      creditinfodecisionnelle: [{ value: '', disabled: true }],
      //It security et gestion de projet
      moyitsecuritygestionprojet: [{ value: '', disabled: true }],
      credititsecuritygestionprojet: [{ value: '', disabled: true }],
      //Big data et cloud
      moybigdatacloud: [{ value: '', disabled: true }],
      creditbigdatacloud: [{ value: '', disabled: true }],
      //Soft Skills et culture 5
      moysoftskills5: [{ value: '', disabled: true }],
      creditsoftskills5: [{ value: '', disabled: true }],
      //UEOP5
      moyUEOP5: [{ value: '', disabled: true }],
      creditUEOP5: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('exdevmobile', 'tpdevmobile', 'oraldevmobile', 'moydevmobile', 'creditdevmobile', 0.7, 0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exweb', 'tpweb', 'oralweb', 'moyweb', 'creditweb', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exAI', 'tpAI', 'oralAI', 'moyAI', 'creditAI',  0.7,0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('exdatamining', 'tpdatamining', 'oraldatamining', 'moydatamining', 'creditdatamining',  0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exgestionprojet', 'tpgestionprojet', 'oralgestionprojet', 'moygestionprojet', 'creditgestionprojet', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exsecurity', 'tpsecurituy', 'oralsecurity', 'moysecurity', 'creditsecurity', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1python', 'ds2pyhton', 'tppython', 'moypython', 'creditpython', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('exbigdata', 'tpbigdata', 'oralbigdata', 'moybigdata', 'creditbigdata', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1bc', 'ds2bc', 'tpbc', 'moybc', 'creditbc', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('ds1loi', 'ds2loi', 'tploi', 'moyloi', 'creditloi', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('ds1aos', 'ds2aos', 'tpaos', 'moyaos', 'creditaos', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('ds1pe', 'ds2pe', 'tppe', 'moype', 'creditpe', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_EB5);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_EB5, total, Module_Credits_EB5);
    });
  }
}