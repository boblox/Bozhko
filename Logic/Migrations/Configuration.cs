namespace Logic.Migrations
{
    using System.Data.Entity.Migrations;

    public sealed class Configuration : DbMigrationsConfiguration<Logic.DAL.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "Logic.DAL.DataContext";
        }

        protected override void Seed(Logic.DAL.DataContext context)
        {
        }
    }
}
