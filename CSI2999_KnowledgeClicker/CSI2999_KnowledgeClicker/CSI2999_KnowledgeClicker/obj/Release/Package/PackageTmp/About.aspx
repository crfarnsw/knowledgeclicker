<%@ Page Title="FAQ" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="About.aspx.cs" Inherits="CSI2999_KnowledgeClicker.About" %>

<asp:Content runat="server" ContentPlaceHolderID="HeadContent">
    <style>
        #feedbackA {
            color: rgba(255, 255, 255, 0.89) !important;
            background-color: rgba(51, 51, 51, 0.60) !important;
            font-size: 22px;
            font-weight: bold;
            border: 2px black dotted;
            padding: 3px;
          }

        #feedbackA:hover {
            background-color: rgba(255, 255, 255, 0.70) !important;
            color: rgba(0, 0, 0, 0.77) !important;
          }
    </style>
</asp:Content>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%: Title %></h2>
    <h1>About the Game</h1>

    <p>Knowledge Clicker is a game inspired by other clicker games such as cookie clicker. In <br> Knowledge Clicker, the player's goal is to score as many points as possible by clicking the brain, <br> teaching it new information. Points can be spent to purchase upgrades that score points for the <br> player, allowing points to increase at a faster pace. As the user scores points, their brain grows <br> and progresses through the school system, from elementary education to earning multiple <br> degrees. </p>


    <h1>About Us</h1>

    <p><strong>Yousif Alawsachi (Captain)</strong>- Front End Development/Design, Group Management</p>
    <p><strong>Caleb Farnsworth</strong>- Gameplay programming, Database and server setup</p>
    <p><strong>Maria Medina</strong>- Graphic Design</p>
    <p><strong>Ian Paraventi</strong>- Gameplay Programming</p>
    <p><strong>Darius Grasseschi</strong>- Techincal Writing and QA</p>
    <br />
    <h2>To Contact us, Click the Email Below and Send your Feedback to Help <br />us Improve Both the Website and the Game:</h2>
    <small><a id="feedbackA" href="mailto:knowledgeclickerfaq@gmail.com">Send Your Feedback</a></small>

</asp:Content>
