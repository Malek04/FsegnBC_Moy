import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 
import{Configuration_Module_BC3,Subject_Coef_BC3, Module_Credits_BC3,total} from 'src/app/Configuration/Configuration_Module_BC3';
import {updateCalculatedValues, updateModuleAverageAndCredits,calculateGeneralAverageAndCredits} from 'src/app/Helpers/calculator';
@Component({
  selector: 'app-sem3bc',
  templateUrl: './sem3bc.component.html',
  styleUrls: ['./sem3bc.component.css']
})
export class Sem3bcComponent implements OnInit {

  moyenneform!: FormGroup;

  constructor(private fb: FormBuilder) { }
  public subjects: number[] = [];
  ngOnInit(): void {
    this.moyenneform = this.fb.group({
      //coosi
      excoosi: ['', [Validators.required, rangeValidator(0, 20)]],
      tpcoosi: ['', [Validators.required, rangeValidator(0, 20)]],
      oralcoosi: ['', [Validators.required, rangeValidator(0, 20)]],
      moycoosi: [{ value: '', disabled: true }],
      creditcoosi: [{ value: '', disabled: true }],
      //base de donnée
      exbd: ['', [Validators.required, rangeValidator(0, 20)]],
      tpbd: ['', [Validators.required, rangeValidator(0, 20)]],
      oralbd: ['', [Validators.required, rangeValidator(0, 20)]],
      moybd: [{ value: '', disabled: true }],
      creditbd: [{ value: '', disabled: true }],
      //poo
      ds1poo: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2poo: ['', [Validators.required, rangeValidator(0, 20)]],
      tppoo: ['', [Validators.required, rangeValidator(0, 20)]],
      moypoo: [{ value: '', disabled: true }],
      creditpoo: [{ value: '', disabled: true }],
      //programmation web
      ds1web: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2web: ['', [Validators.required, rangeValidator(0, 20)]],
      tpweb: ['', [Validators.required, rangeValidator(0, 20)]],
      moyweb: [{ value: '', disabled: true }],
      creditweb: [{ value: '', disabled: true }],
      //statestique inferentielle
      exstat: ['', [Validators.required, rangeValidator(0, 20)]],
      tpstat: ['', [Validators.required, rangeValidator(0, 20)]],
      oralstat: ['', [Validators.required, rangeValidator(0, 20)]],
      moystat: [{ value: '', disabled: true }],
      creditstat: [{ value: '', disabled: true }],
      //intelligence artificielle
      exia: ['', [Validators.required, rangeValidator(0, 20)]],
      tpia: ['', [Validators.required, rangeValidator(0, 20)]],
      oralia:['', [Validators.required, rangeValidator(0, 20)]],
      moyia: [{ value: '', disabled: true }],
      creditia: [{ value: '', disabled: true }],
      //marketing digital
      ds1md: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2md: ['', [Validators.required, rangeValidator(0, 20)]],
      tpmd: ['', [Validators.required, rangeValidator(0, 20)]],
      moymd: [{ value: '', disabled: true }],
      creditmd: [{ value: '', disabled: true }],
      //economie numerique
      exen: ['', [Validators.required, rangeValidator(0, 20)]],
      tpen: ['', [Validators.required, rangeValidator(0, 20)]],
      oralen: ['', [Validators.required, rangeValidator(0, 20)]],
      moyen: [{ value: '', disabled: true }],
      crediten: [{ value: '', disabled: true }],
      //ethique et lois des it
      ds1loi: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2loi: ['', [Validators.required, rangeValidator(0, 20)]],
      tploi: ['', [Validators.required, rangeValidator(0, 20)]],
      moyloi: [{ value: '', disabled: true }],
      creditloi: [{ value: '', disabled: true }],
      //projet personnel professionel
      ds1ppp: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2ppp: ['', [Validators.required, rangeValidator(0, 20)]],
      tpppp: ['', [Validators.required, rangeValidator(0, 20)]],
      moyppp: [{ value: '', disabled: true }],
      creditppp: [{ value: '', disabled: true }],
      //reseau
      ds1reseau: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2reseau: ['', [Validators.required, rangeValidator(0, 20)]],
      tpreseau: ['', [Validators.required, rangeValidator(0, 20)]],
      moyreseau: [{ value: '', disabled: true }],
      creditreseau: [{ value: '', disabled: true }],
      //compilation
      ds1compilation: ['', [Validators.required, rangeValidator(0, 20)]],
      ds2compilation: ['', [Validators.required, rangeValidator(0, 20)]],
      tpcompilation: ['', [Validators.required, rangeValidator(0, 20)]],
      moycompilation: [{ value: '', disabled: true }],
      creditcompilation: [{ value: '', disabled: true }],
      //moyenne generale et credit
      moy: [{ value: '', disabled: true }],
      credit: [{ value: '', disabled: true }],
      //moyenne et credit par module
      //Conception et base de données
      moyconceptionetbd: [{ value: '', disabled: true }],
      creditconceptionetbd: [{ value: '', disabled: true }],
      // Programmation avancée 1 
      moypa: [{ value: '', disabled: true }],
      creditpa: [{ value: '', disabled: true }],
      //Stat et IA
      moystatetia: [{ value: '', disabled: true }],
      creditstatetia: [{ value: '', disabled: true }],
      //Digital Business
      moydegitalbusiness: [{ value: '', disabled: true }],
      creditdegitalbusiness: [{ value: '', disabled: true }],
      //Soft Skills et culture 3
      moysoftskills3: [{ value: '', disabled: true }],
      creditsoftskills3: [{ value: '', disabled: true }],
      //UEOP3
      moyUEOP3: [{ value: '', disabled: true }],
      creditUEOP3: [{ value: '', disabled: true }],
    });
    this.moyenneform.valueChanges.subscribe(() => {
      updateCalculatedValues('excoosi', 'tpcoosi', 'oralcoosi', 'moycoosi', 'creditcoosi', 0.7, 0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exbd', 'tpbd', 'oralbd', 'moybd', 'creditbd', 0.7,0.2, 0.1, 3, this.moyenneform);
      updateCalculatedValues('ds1poo', 'ds2poo', 'tppoo', 'moypoo', 'creditpoo', 0.4,0.4, 0.2, 3, this.moyenneform);
      updateCalculatedValues('ds1web', 'ds2web', 'tpweb', 'moyweb', 'creditweb', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('exstat', 'tpstat', 'oralstat', 'moystat', 'creditstat', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('exia', 'tpia', 'oralia', 'moyia', 'creditia', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1md', 'ds2md', 'tpmd', 'moymd', 'creditmd', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('exen', 'tpen', 'oralen', 'moyen', 'crediten', 0.7,0.2, 0.1, 2, this.moyenneform);
      updateCalculatedValues('ds1loi', 'ds2loi', 'tploi', 'moyloi', 'creditloi', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateCalculatedValues('ds1ppp', 'ds2ppp', 'tpppp', 'moyppp', 'creditppp', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateCalculatedValues('ds1reseau', 'ds2reseau', 'tpreseau', 'moyreseau', 'creditreseau', 0.4,0.4, 0.2, 4, this.moyenneform);
      updateCalculatedValues('ds1compilation', 'ds2compilation', 'tpcompilation', 'moycompilation', 'creditcompilation', 0.4,0.4, 0.2, 2, this.moyenneform);
      updateModuleAverageAndCredits(this.moyenneform, Configuration_Module_BC3);
      calculateGeneralAverageAndCredits(this.moyenneform, Subject_Coef_BC3, total, Module_Credits_BC3);
    });
  }
}