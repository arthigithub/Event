var app=angular.module("myApp",[]);
app.controller("billingController",function($scope,$http){
$scope.giveBilling=function(){
    var data={
        "firstname":$scope.firstname,
        "email":$scope.email,
        "address":$scope.address,
        "city":$scope.city,
        "state":$scope.state,
        "zip":$scope.zip

    }
    $http.post("http://localhost:3000/billing",data,function(response){
        console.log(response.data);

    });
}
});

app.controller("paymentController",function($scope,$http){
    $scope.givePayment=function(){
        var data={
            "cardname":$scope.cardname,
            "credit_card_no":$scope.credit_card_no,
            "exp_month":$scope.exp_month,
            "exp_year":$scope.exp_year,
            "cvv":$scope.cvv

        }
        $http.post("http://localhost:3000/payment",data,function(response){
            console.log(response.data);

        });
    }
    });


    app.controller("LRController",function($scope,$http){
        $scope.giveLogin=function(){
            var data={
                "username":$scope.username,
                "password":$scope.password

            }
            $http.post("http://localhost:3000/index",data,function(response){
                console.log(response.data);

            });
        }
        });

        app.controller("RegisterController",function($scope,$http){
            $scope.giveRegistration=function(){
                var data={
                    "name":$scope.name,
                    "email":$scope.email,
                    "phone":$scope.phone,
                    "password":$scope.password,
                    "cpassword":$scope.cpassword

                }
                $http.post("http://localhost:3000/Registration",data,function(response){
                    console.log(response.data);

                });
            }
            });

           