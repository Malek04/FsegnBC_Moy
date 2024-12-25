import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_BIS5,Subject_Coef_BIS5, Module_Credits_BIS5,total} from 'src/app/Configuration/Configuration_Module_BIS5';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem5bis',
  templateUrl: './sem5bis.component.html',
  styleUrls: ['./sem5bis.component.css']
})
export class Sem5bisComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //intégration des SI	
      exSI: ['', [Validators.required, rangeValidator(0, 20)]],
      TPSI: ['', [Validators.required, rangeValidator(0, 20)]],
      OralSI: ['', [Validators.required, rangeValidator(0, 20)]],
      moySI: [{ value: '', disabled: true }],
      creditSI: [{ value: '', disabled: true }],
      //ERP
      exERP: ['', [Validators.required, rangeValidator(0, 20)]],
      tpERP: ['', [Validators.required, rangeValidator(0, 20)]],
      oralERP: ['', [Validators.required, rangeValidator(0, 20)]],
      moyERP: [{ value: '', disabled: true }],
      creditERP: [{ value: '', disabled: true }],
      //gestion de projet SI	
      ds1gstionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2gstionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgestionprojet: ['', [Validators.required, rangeValidator(0, 20)]],
      moygestionprojet: [{ value: '', disabled: true }],
      creditgestionprojet: [{ value: '', disabled: true }],
      //Génie logiciel
      ds1genielogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2genielogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgenielogiciel: ['', [Validators.required, rangeValidator(0, 20)]],
      moygenielogiciel: [{ value: '', disabled: true }],
      creditgenielogiciel: [{ value: '', disabled: true }],
      //Développement Mobile
      exdevmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      tpdevmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      oraldevmobile: ['', [Validators.required, rangeValidator(0, 20)]],
      moydevmobile: [{ value: '', disabled: true }],
      creditdevmobile: [{ value: '', disabled: true }],
      //Developpement JEE
      ds1jee: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2jee: ['', [Validators.required, rangeValidator(0, 20)]],
      tpjee:['', [Validators.required, rangeValidator(0, 20)]],
      moyjee: [{ value: '', disabled: true }],
      creditjee: [{ value: '', disabled: true }],
      //Business intelligence
      exbi: ['', [Validators.required, rangeValidator(0, 20)]],
      tpbi: ['', [Validators.required, rangeValidator(0, 20)]],
      oralbi: ['', [Validators.required, rangeValidator(0, 20)]],
      moybi: [{ value: '', disabled: true }],
      creditbi: [{ value: '', disabled: true }],
      //stratégie d'affaire electronique
      ds1sae: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2sae: ['', [Validators.required, rangeValidator(0, 20)]],
      oralsae: ['', [Validators.required, rangeValidator(0, 20)]],
      moysae: [{ value: '', disabled: true }],
      creditsae: [{ value: '', disabled: true }],
      //gestion de carrière
      ds1gc: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2gc: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgc: ['', [Validators.required, rangeValidator(0, 20)]],
      moygc: [{ value: '', disabled: true }],
      creditgc: [{ value: '', disabled: true }],
      //Anglais d'affaire
      ds1anglais: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2anglais: ['', [Validators.required, rangeValidator(0, 20)]],
      tpanglais: ['', [Validators.required, rangeValidator(0, 20)]],
      moyanglais: [{ value: '', disabled: true }],
      creditanglais: [{ value: '', disabled: true }],
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
      //Systèmes intégrés	
      moySintegre: [{ value: '', disabled: true }],
      creditSintegre: [{ value: '', disabled: true }],
      //genie logiciel et gestion de projet
      moygletgp: [{ value: '', disabled: true }],
      creditgletgp: [{ value: '', disabled: true }],
      //développement informatique II	
      moydev: [{ value: '', disabled: true }],
      creditdev: [{ value: '', disabled: true }],
      //Sciences de la décision	
      moydecision: [{ value: '', disabled: true }],
      creditdecision: [{ value: '', disabled: true }],
      //Soft Skills et culture 5
      moysoftskills5: [{ value: '', disabled: true }],
      creditsoftskills5: [{ value: '', disabled: true }],
      //UEOP5
      moyUEOP5: [{ value: '', disabled: true }],
      creditUEOP5: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('exSI', 'TPSI', 'OralSI', 'moySI', 'creditSI', 0.7, 0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exERP', 'tpERP', 'oralERP', 'moyERP', 'creditERP', 0.7,0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('ds1gstionprojet', 'ds2gstionprojet', 'tpgestionprojet', 'moygestionprojet', 'creditgestionprojet', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1genielogiciel', 'ds2genielogiciel', 'tpgenielogiciel', 'moygenielogiciel', 'creditgenielogiciel', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('exdevmobile', 'tpdevmobile', 'oraldevmobile', 'moydevmobile', 'creditdevmobile', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1jee', 'ds2jee', 'tpjee', 'moyjee', 'creditjee', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('exbi', 'tpbi', 'oralbi', 'moybi', 'creditbi', 0.7,0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('ds1sae', 'ds2sae', 'oralsae', 'moysae', 'creditsae', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1gc', 'ds2gc', 'tpgc', 'moygc', 'creditgc', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('ds1anglais', 'ds2anglais', 'tpanglais', 'moyanglais', 'creditanglais', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('ds1aos', 'ds2aos', 'tpaos', 'moyaos', 'creditaos', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('ds1ML', 'ds2ML', 'tpML', 'moyML', 'creditML', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_BIS5);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_BIS5, total, Module_Credits_BIS5);
    });
  }
}