<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="CSI2999_KnowledgeClicker.Register" %>
<asp:Content ID="content2" ContentPlaceHolderID="HeadContent" runat="server">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="Content/bootstrap.min.css">

    <style type="text/css">
        body {
    background-image: url(Images/Background2.png);
    background-repeat: no-repeat;
    background-size: cover;
    color: rgba(255, 255, 255, 0.80) !important;
}

        form {
            background-color: rgba(51, 51, 51, 0.65);
            height: 85%;
            margin: 45px;
             }


input[type=text],
input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color: white;
    border: 2px black solid;
    color: black;
    font-size: 17px;
    font-weight: bold;
}

button {
    background-color: #008000;
    color: white;
    border: 2px rgba(0, 0, 0, 0.50) solid;
    cursor: pointer;
    width: 39.5%;
    height: 55px;
    font-weight: bolder;
    font-size: 12px;
}

button:hover {
    opacity: 1.5;
    background-color: Highlight;
    color: crimson !important;
    border: 2px rgba(0, 0, 0, 0.85) solid;
}

#resetREG {
    background-color: #008000;
    color: white;
    border: 2px rgba(0, 0, 0, 0.50) solid;
    cursor: pointer;
    width: 39.5%;
    height: 55px;
    font-weight: bolder;
    font-size: 12px;
}

        #resetREG:hover {
            opacity: 1.5;
            border: 2px rgba(0, 0, 0, 0.85) solid;
            background-color: Highlight;
            color: crimson !important;
        }

h3 {
    width: 80%;
    padding: 4px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    background-color: rgba(51, 51, 51, 0.50);
}


    </style>

</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

        <div class="container">
            <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
		       
                    <h3>SIGN UP</h3>
               
                    <label style="margin-right:30px;" for="txtEmail"><b>Username</b></label>
                    <input type="text" runat="server" id="txtEmail" placeholder="Enter Username" required/>
               
                    <label for="txtPassword"><b>Password</b></label>
               
                    <input type="password" placeholder="Create Password" runat="server" ID="txtPassword" required/>

                    <label for="txtRepeatPassword"><b>Repeat Password</b></label>
              
                    <input type="password" placeholder="Retype Password" runat="server" ID="txtRepeatPassword" required/>
                                      
                    <button type="submit" runat="server" id="btnSubmit" OnServerClick="btnSubmit_OnServerClick" value="submit">CREATE ACCOUNT</button>

                    <button id="resetREG"  type="reset" value="reset">Reset</button>

            </div>

            <div class="clearfix">
            </div>
            </div>
            </div>
		<script type="text/javascript" src="Scripts/bootstrap.js"></script>
</asp:Content>
