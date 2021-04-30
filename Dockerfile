FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS builder
WORKDIR /source
COPY . .
RUN dotnet publish Bitgly.Web.csproj -c Release -o /app

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS runner
WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT ["dotnet", "Bitgly.Web.dll"]
