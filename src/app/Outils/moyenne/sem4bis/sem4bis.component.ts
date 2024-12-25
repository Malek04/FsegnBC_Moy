import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_BIS4,Subject_Coef_BIS4, Module_Credits_BIS4,total} from 'src/app/Configuration/Configuration_Module_BIS4';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem4bis',
  templateUrl: './sem4bis.component.html',
  styleUrls: ['./sem4bis.component.css']
})
export class Sem4bisComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //gestion des opérations et de la logistique
      exgol: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgol: ['', [Validators.required, rangeValidator(0, 20)]],
      oralgol: ['', [Validators.required, rangeValidator(0, 20)]],
      moygol: [{ value: '', disabled: true }],
      creditgol: [{ value: '', disabled: true }],
      //Business process Management
      exbpm: ['', [Validators.required, rangeValidator(0, 20)]],
      tpbpm: ['', [Validators.required, rangeValidator(0, 20)]],
      oralbpm: ['', [Validators.required, rangeValidator(0, 20)]],
      moybpm: [{ value: '', disabled: true }],
      creditbpm: [{ value: '', disabled: true }],
      //Programmation web2	
      ds1web2: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2web2: ['', [Validators.required, rangeValidator(0, 20)]],
      tpweb2: ['', [Validators.required, rangeValidator(0, 20)]],
      moyweb2: [{ value: '', disabled: true }],
      creditweb2: [{ value: '', disabled: true }],
      //Framework .Net
      exnet: ['', [Validators.required, rangeValidator(0, 20)]],
      tpnet: ['', [Validators.required, rangeValidator(0, 20)]],
      oralnet: ['', [Validators.required, rangeValidator(0, 20)]],
      moynet: [{ value: '', disabled: true }],
      creditnet: [{ value: '', disabled: true }],
      //SGBD et Administration des BDS	
      exsgbd: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsbgd: ['', [Validators.required, rangeValidator(0, 20)]],
      oralsgbd: ['', [Validators.required, rangeValidator(0, 20)]],
      moysgbd: [{ value: '', disabled: true }],
      creditsgbd: [{ value: '', disabled: true }],
      //Introduction au big Data	
      ds1bigdata: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2bigdata: ['', [Validators.required, rangeValidator(0, 20)]],
      tpbigdata:['', [Validators.required, rangeValidator(0, 20)]],
      moybigdata: [{ value: '', disabled: true }],
      creditbigdata: [{ value: '', disabled: true }],
      //Sécurité des SI	
      exsecuritesi: ['', [Validators.required, rangeValidator(0, 20)]],
      tpsecuritesi: ['', [Validators.required, rangeValidator(0, 20)]],
      oralsecuritesi: ['', [Validators.required, rangeValidator(0, 20)]],
      moysecuritesi: [{ value: '', disabled: true }],
      creditsecuritesi: [{ value: '', disabled: true }],
      //Gouvernance des SI	
      exgouvernancesi: ['', [Validators.required, rangeValidator(0, 20)]],
      tpgouvernancesi: ['', [Validators.required, rangeValidator(0, 20)]],
      oralgouvernancesi: ['', [Validators.required, rangeValidator(0, 20)]],
      moygouvernancesi: [{ value: '', disabled: true }],
      creditgouvernancesi: [{ value: '', disabled: true }],
      //problem solving
      ds1psolving: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2psolving: ['', [Validators.required, rangeValidator(0, 20)]],
      tppsolving: ['', [Validators.required, rangeValidator(0, 20)]],
      moypsolving: [{ value: '', disabled: true }],
      creditpsolving: [{ value: '', disabled: true }],
      //anglais
      ds1anglais: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2anglais: ['', [Validators.required, rangeValidator(0, 20)]],
      tpanglais: ['', [Validators.required, rangeValidator(0, 20)]],
      moyanglais: [{ value: '', disabled: true }],
      creditanglais: [{ value: '', disabled: true }],
      //Architecture des Systèmes Informatiques	
      ds1archisi: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2archisi: ['', [Validators.required, rangeValidator(0, 20)]],
      tparchisi: ['', [Validators.required, rangeValidator(0, 20)]],
      moyarchisi: [{ value: '', disabled: true }],
      creditarchisi: [{ value: '', disabled: true }],
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
      //Processus des SI	
      moyprocesssi: [{ value: '', disabled: true }],
      creditprocesssi: [{ value: '', disabled: true }],
      //Développement informatique
      moydevelopment: [{ value: '', disabled: true }],
      creditdevelopment: [{ value: '', disabled: true }],
      //SGBD et Adminstration	
      moysgbdetad: [{ value: '', disabled: true }],
      creditsgbdetad: [{ value: '', disabled: true }],
      //Management des SI	
      moymanagement: [{ value: '', disabled: true }],
      creditmanagement: [{ value: '', disabled: true }],
      //Soft Skills et culture 4
      moysoftskills4: [{ value: '', disabled: true }],
      creditsoftskills4: [{ value: '', disabled: true }],
      //UEOP4
      moyUEOP4: [{ value: '', disabled: true }],
      creditUEOP4: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('exgol', 'tpgol', 'oralgol', 'moygol', 'creditgol', 0.7, 0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exbpm', 'tpbpm', 'oralbpm', 'moybpm', 'creditbpm', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1web2', 'ds2web2', 'tpweb2', 'moyweb2', 'creditweb2', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('exnet', 'tpnet', 'oralnet', 'moynet', 'creditnet', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exsgbd', 'tpsbgd', 'oralsgbd', 'moysgbd', 'creditsgbd', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1bigdata', 'ds2bigdata', 'tpbigdata', 'moybigdata', 'creditbigdata', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('exsecuritesi', 'tpsecuritesi', 'oralsecuritesi', 'moysecuritesi', 'creditsecuritesi', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exgouvernancesi', 'tpgouvernancesi', 'oralgouvernancesi', 'moygouvernancesi', 'creditgouvernancesi', 0.7,0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('ds1psolving', 'ds2psolving', 'tppsolving', 'moypsolving', 'creditpsolving', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateCalculatedValues('ds1anglais', 'ds2anglais', 'tpanglais', 'moyanglais', 'creditanglais', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1archisi', 'ds2archisi', 'tparchisi', 'moyarchisi', 'creditarchisi', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1poo', 'ds2poo', 'tppoo', 'moypoo', 'creditpoo', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_BIS4);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_BIS4, total, Module_Credits_BIS4);
    });
  }
}