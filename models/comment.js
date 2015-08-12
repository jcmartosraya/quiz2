// Definicion del modelo de comment

module.exports = function(sequelize, DataTypes) {
 return sequelize.define(
  	'Comment',
    { texto: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Comentario"}}
      },
	  publicado:{
		  type: DataTypes.BOOLEAN,
		  defaultValue:false
	  }
    }
  ,
  {
    classMethods: {
      
      PreguntasConComentario: function () {
        return this.aggregate('QuizId','count').then('success',function(count) { 
		return count; 
		}) 
      }
    }
  });
}