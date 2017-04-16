"use strict";

var personList = [];
var app = angular.module('Perfiles', []);

app.service('formatedFunctions', function() {


    this.loadGender=function(generer){
      $.ajax({
          method: "GET",
          url: "https://randomuser.me/api/?gender="+generer
      })
          .done(function(response) {
              $.each(response.results, function (index, person) {
                  var personObj = {
                      img : person.picture.large,
                      name: person.name.first +' '+person.name.last,
                      gender:person.gender,
                      email: person.email
                  };
                  personList.push(personObj);
                  render(personObj);
              });
          });
    };
    this.loadNat=function(nat){
      $.ajax({
          method: "GET",
          url: "https://randomuser.me/api/?nat="+nat
      })
          .done(function(response) {
              $.each(response.results, function (index, person) {
                  var personObj = {
                      img : person.picture.large,
                      name: person.name.first +' '+person.name.last,
                      email: person.email
                  };
                  personList.push(personObj);
                  render(personObj);
              });
          });
    };
    this.loadAll=function(rs,gen,nat){
      $.ajax({
          method: "GET",
          url: "https://randomuser.me/api/?results="+rs+"&nat="+nat+"gender="+gen
      })
          .done(function(response) {
              $.each(response.results, function (index, person) {
                  var personObj = {
                      img : person.picture.large,
                      name: person.name.first +' '+person.name.last,
                      email: person.email
                  };
                  personList.push(personObj);
                  render(personObj);
              });
          });
    };



});

var render = function (person) {
    var personElement = '<div class="card" style="width: 20rem;">' +
        '<img class="card-img-top" src="' + person.img + '"alt="Card image cap"> ' +
        '<div class="card-block">'+
        '<h4 class="card-title">' + person.name + '</h4> ' +
        '<h4 class="card-title">' + person.gender + '</h4> ' +
        '<a href="#">' + person.email + '</a> ' +
        '</div>' +
        '</div>';
    $('#list').append(personElement);
};
app.controller('MainCtrl', function($scope, formatedFunctions) {

  $scope.generos = {
    model:null,
    generosDisponibles:[
       {genero:"female"},
       {genero:"male"},
       {genero:"todo"}
     ]
     };
     $scope.resultados = {
       model:null,
       resultadosDisponibles:[
          {result:"10"},
          {result:"20"},
          {result:"30"}
        ]
        };
  $scope.paises = {
    model:null,
    paisesDisponibles:[
      {pais:"AU"},
        {pais:"BR"},
        {pais:"CA"},
        {pais:"CH"},
        {pais:"DE"},
          {pais:"DK"},
         {pais:"ES"},
          {pais:"FI"},
          {pais:"FR"},
        {pais:"GB"},
          {pais:"IE"},
        {pais:"IR"},
        {pais:"NL"},
       {pais:"NZ"},
       {pais:"TR"},
        {pais:"US"}
       ]
        };

$scope.loadUser = function(){
  var genero=$scope.generos.model;
  if (genero!=null) {
      formatedFunctions.loadGender(genero);
  }


};





});
