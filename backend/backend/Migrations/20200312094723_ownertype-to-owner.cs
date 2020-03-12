using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class ownertypetoowner : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OwnerTypeId",
                table: "Owners",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Owners_OwnerTypeId",
                table: "Owners",
                column: "OwnerTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Owners_OwnerTypes_OwnerTypeId",
                table: "Owners",
                column: "OwnerTypeId",
                principalTable: "OwnerTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Owners_OwnerTypes_OwnerTypeId",
                table: "Owners");

            migrationBuilder.DropIndex(
                name: "IX_Owners_OwnerTypeId",
                table: "Owners");

            migrationBuilder.DropColumn(
                name: "OwnerTypeId",
                table: "Owners");
        }
    }
}
