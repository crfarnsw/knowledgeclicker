namespace CSI2999_KnowledgeClicker
{
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Data;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Web;
    using System.Web.Script.Services;
    using System.Web.Services;
    using System.Web.Services.Protocols;
    using System.Web.UI;
    using System.Xml.Linq;

    using CSI2999_KnowledgeClicker.Models;

    public partial class Default : Page
    {
        [WebMethod]
        public static void SaveUser(int userId, int numKnowledge, int totalKnowledge, int? numBook, 
            int? numTutor, int? numProf, int? numSchool, int? numUni, int? numLab, int? Level)
        {
            knowledgeclickerdbEntities db = new knowledgeclickerdbEntities();
            User item = null;
            item = db.Users.Find(userId);
            item.numKnowledge = numKnowledge;
            item.totalKnowledge = totalKnowledge;
            item.Level = Level;
            item.numBook = numBook;
            item.numTutor = numTutor;
            item.numProf = numProf;
            item.numSchool = numSchool;
            item.numUni = numUni;
            item.numLab = numLab;
            db.SaveChanges();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public static List<User> GetUsers()
        {
            knowledgeclickerdbEntities db = new knowledgeclickerdbEntities();
            int id = int.Parse(HttpContext.Current.Session["UserID"].ToString());
            var res = db.Users.Where(u => u.UserID == id).ToList()
                .Select(
                u => new User
                         {
                             UserID = id,
                             numKnowledge = u.numKnowledge,
                             totalKnowledge = u.totalKnowledge,
                             numBook = u.numBook,
                             numProf = u.numProf,
                             numTutor = u.numTutor,
                             numSchool = u.numSchool,
                             numUni = u.numUni,
                             numLab = u.numLab,
                             Level = u.Level
                         }).ToList();
            return res;
        }
        
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserID"] != null)
            {
                lblID.Value = Session["UserID"].ToString();
            }
            else
            {
                Response.Redirect("Login.aspx");
            }
        }

        protected void btnSave_OnClick(object sender, EventArgs e)
        {

        }
    }
}