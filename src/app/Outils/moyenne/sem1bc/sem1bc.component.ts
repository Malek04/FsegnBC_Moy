import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_BC1,Subject_Coef_BC1, Module_Credits_BC1,total} from 'src/app/Configuration/Configuartion_Module_BC1';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem1bc',
  templateUrl: './sem1bc.component.html',
  styleUrls: ['./sem1bc.component.css']
})
export class Sem1bcComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //technique de communication
      tdcds1: ['', [Validators.required, rangeValidator(0, 20)]],
      tdcds2: ['', [Validators.required, rangeValidator(0, 20)]],
      tdctp: ['', [Validators.required, rangeValidator(0, 20)]],
      tdcmoy: [{ value: '', disabled: true }],
      tdccredit: [{ value: '', disabled: true }],
      //comptence numerique
      cnds1: ['', [Validators.required, rangeValidator(0, 20)]],
      cnds2: ['', [Validators.required, rangeValidator(0, 20)]],
      cntp: ['', [Validators.required, rangeValidator(0, 20)]],
      cnmoy: [{ value: '', disabled: true }],
      cncredit: [{ value: '', disabled: true }],
      //business communication
      bcds1: ['', [Validators.required, rangeValidator(0, 20)]],
      bcds2: ['', [Validators.required, rangeValidator(0, 20)]],
      bctp: ['', [Validators.required, rangeValidator(0, 20)]],
      bcmoy: [{ value: '', disabled: true }],
      bccredit: [{ value: '', disabled: true }],
      //algorithmique
      algo1ex: ['', [Validators.required, rangeValidator(0, 20)]],
      algo1tp: ['', [Validators.required, rangeValidator(0, 20)]],
      algo1oral: ['', [Validators.required, rangeValidator(0, 20)]],
      algomoy: [{ value: '', disabled: true }],
      algocredit: [{ value: '', disabled: true }],
      //architecture des ordinateurs
      exarchi: ['', [Validators.required, rangeValidator(0, 20)]],
      tparchi: ['', [Validators.required, rangeValidator(0, 20)]],
      oralarchi: ['', [Validators.required, rangeValidator(0, 20)]],
      moyarchi: [{ value: '', disabled: true }],
      creditarchi: [{ value: '', disabled: true }],
      //systeme d'exploitation
      exos: ['', [Validators.required, rangeValidator(0, 20)]],
      tpos: ['', [Validators.required, rangeValidator(0, 20)]],
      oralos: ['', [Validators.required, rangeValidator(0, 20)]],
      moyos: [{ value: '', disabled: true }],
      creditos: [{ value: '', disabled: true }],
      //statestique
      exstat: ['', [Validators.required, rangeValidator(0, 20)]],
      tpstat: ['', [Validators.required, rangeValidator(0, 20)]],
      oralstat:['', [Validators.required, rangeValidator(0, 20)]],
      moystat: [{ value: '', disabled: true }],
      creditstat: [{ value: '', disabled: true }],
      //analyse
      exanalyse: ['', [Validators.required, rangeValidator(0, 20)]],
      tpanalyse: ['', [Validators.required, rangeValidator(0, 20)]],
      oralanalyse: ['', [Validators.required, rangeValidator(0, 20)]],
      moyanalyse: [{ value: '', disabled: true }],
      creditanalyse: [{ value: '', disabled: true }],
      //comptabilite
      excompta: ['', [Validators.required, rangeValidator(0, 20)]],
      tpcompta: ['', [Validators.required, rangeValidator(0, 20)]],
      oralcompta: ['', [Validators.required, rangeValidator(0, 20)]],
      moycompta: [{ value: '', disabled: true }],
      creditcompta: [{ value: '', disabled: true }],
      //principe de gestion
      expg: ['', [Validators.required, rangeValidator(0, 20)]],
      tppg: ['', [Validators.required, rangeValidator(0, 20)]],
      oralpg: ['', [Validators.required, rangeValidator(0, 20)]],
      moypg: [{ value: '', disabled: true }],
      creditpg: [{ value: '', disabled: true }],
      //multimedia
      multimediads1: ['', [Validators.required, rangeValidator(0, 20)]],
      multimediads2: ['', [Validators.required, rangeValidator(0, 20)]],
      multimediatp: ['', [Validators.required, rangeValidator(0, 20)]],
      multimediamoy: [{ value: '', disabled: true }],
      creditmultimedia: [{ value: '', disabled: true }],
      //web
      webds1: ['', [Validators.required, rangeValidator(0, 20)]],
      webds2: ['', [Validators.required, rangeValidator(0, 20)]],
      webtp: ['', [Validators.required, rangeValidator(0, 20)]],
      webmoy: [{ value: '', disabled: true }],
      webcredit: [{ value: '', disabled: true }],
      //moyenne generale et credit
      moy: [{ value: '', disabled: true }],
      credit: [{ value: '', disabled: true }],
      //moyenne et credit par module
      //soft skills
      moysoftskills: [{ value: '', disabled: true }],
      creditsoftskills: [{ value: '', disabled: true }],
      //algo
      moyalgo: [{ value: '', disabled: true }],
      creditalgo: [{ value: '', disabled: true }],
      //systeme
      moysysteme: [{ value: '', disabled: true }],
      creditsysteme: [{ value: '', disabled: true }],
      //math
      moymath: [{ value: '', disabled: true }],
      creditmath: [{ value: '', disabled: true }],
      //gestion
      moygestion: [{ value: '', disabled: true }],
      creditgestion: [{ value: '', disabled: true }],
      //UEOP
      moyUEOP: [{ value: '', disabled: true }],
      creditUEOP: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('tdcds1', 'tdcds2', 'tdctp', 'tdcmoy', 'tdccredit', 0.4, 0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('cnds1', 'cnds2', 'cntp', 'cnmoy', 'cncredit', 0.4,0.4, 0.2, 2 , this.moyenneform);
      updateCalculatedValues('bcds1', 'bcds2', 'bctp', 'bcmoy', 'bccredit', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('algo1ex', 'algo1tp', 'algo1oral', 'algomoy', 'algocredit', 0.7,0.2, 0.1, 6, this.moyenneform);
      updateCalculatedValues('exarchi', 'tparchi', 'oralarchi', 'moyarchi', 'creditarchi', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exos', 'tpos', 'oralos', 'moyos', 'creditos', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exstat', 'tpstat', 'oralstat', 'moystat', 'creditstat', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exanalyse', 'tpanalyse', 'oralanalyse', 'moyanalyse', 'creditanalyse', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('excompta', 'tpcompta', 'oralcompta', 'moycompta', 'creditcompta', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('expg', 'tppg', 'oralpg', 'moypg', 'creditpg', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('multimediads1', 'multimediads2', 'multimediatp', 'multimediamoy', 'creditmultimedia', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateCalculatedValues('webds1', 'webds2', 'webtp', 'webmoy', 'webcredit', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_BC1);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_BC1, total, Module_Credits_BC1);
    });
  }
}
