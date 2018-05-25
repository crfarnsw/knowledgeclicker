using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BCrypt;
using BCrypt.Net;

namespace CSI2999_KnowledgeClicker
{
    using CSI2999_KnowledgeClicker.Models;

    using BCrypt = BCrypt.Net.BCrypt;

    public partial class Register : System.Web.UI.Page
    {
        private knowledgeclickerdbEntities db = new knowledgeclickerdbEntities();

        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void btnSubmit_OnServerClick(object sender, EventArgs e)
        {
            var u = new User();
            if (ModelState.IsValid)
            {
                using (db)
                {
                    u.Username = txtEmail.Value;
                    u.Password = this.SetPassword(this.txtPassword.Value);

                    this.db.Users.Add(u);
                    this.db.SaveChanges();
                }
                Response.Redirect("Login.aspx");
            }
        }

        private string SetPassword(string userPassword)
        {
            string pwdToHash = userPassword;
            string mySalt = BCrypt.GenerateSalt();
            string hashToStoreInDatabase = BCrypt.HashPassword(pwdToHash, mySalt);
            return hashToStoreInDatabase;
        }

        private bool DoesPasswordMatch(string userEnteredPassword,string hashedPwdFromDatabase)
        {
            return BCrypt.Verify(userEnteredPassword, hashedPwdFromDatabase);
        }
    }
}